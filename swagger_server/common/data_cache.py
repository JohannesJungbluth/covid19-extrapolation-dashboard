import pandas as pd
import time

from swagger_server.common.covid19 import COVID19
from swagger_server.common import data_helper


class DataCache:
    def __init__(self):
        self.api = COVID19()
        self.df_countries_time_line = pd.DataFrame()
        self.df_countries_total_extrapolated_7_days = {}
        self.updated = 0
        self.update()

    def update(self):
        # update data only when older then one hour
        if time.time() - self.updated > 3600:
            response = self.api.get_all(time_lines=True)
            df_response = pd.DataFrame.from_dict(response["locations"])

            country_dfs = []
            for country in df_response["country"].unique():
                df_country = df_response.loc[df_response["country"] == country]
                df_country = data_helper.get_df_country(df_country, country)
                country_dfs.append(df_country)

            df_countries_time_line = pd.concat(country_dfs)
            df_countries_time_line = df_countries_time_line.sort_values("timestamp")
            self.df_countries_time_line = df_countries_time_line.reset_index(drop=True)

            self.df_countries_total_extrapolated_7_days = data_helper.get_total_by_country(self.df_countries_time_line,
                                                                                           7)

            self.updated = time.time()

    def get_df_countries_time_lines(self):
        self.update()
        return self.df_countries_time_line

    def get_df_countries_total_extrapolated_7_days(self):
        self.update()
        return self.df_countries_total_extrapolated_7_days
