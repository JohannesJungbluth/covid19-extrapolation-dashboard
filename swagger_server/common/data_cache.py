import pandas as pd
import time

from swagger_server.common.covid19 import COVID19
from swagger_server.common import data_helper


class DataCache:
    def __init__(self):
        self.api = COVID19()
        self.df_countries = pd.DataFrame()
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

            self.df_countries = pd.concat(country_dfs)
            self.df_countries = self.df_countries.sort_values("timestamp")
            self.df_countries = self.df_countries.reset_index(drop=True)

            self.updated = time.time()

    def get_df_countries(self):
        self.update()
        return self.df_countries
