import pandas as pd
import math


def parse_time_lines_to_df(time_line_data, col_name):
    df = pd.DataFrame(time_line_data[col_name])
    df = df[df["timeline"] != 0]
    df = df.reset_index()
    df = df.rename(columns={"index": "timestamp", "timeline": col_name})
    return df[["timestamp", col_name]]


def extrapolate_social_distancing(series, social_distancing=False):
    # see https://www.itv.com/news/2020-03-21/coronavirus-why-social-distancing-works/
    if social_distancing:
        factor = 3
    else:
        factor = 2
    return int(factor * series.iloc[-1])


def extrapolate_values_for_days(df, number_of_days):
    for _ in range(number_of_days):
        extra_day = (pd.Timestamp(df.iloc[-1]["timestamp"]) + pd.Timedelta("1 days")).isoformat()
        extra_day = extra_day[:-6] + "Z"
        extrapolated_values = {
            "timestamp": extra_day,
            "social_distancing": extrapolate_social_distancing(df["confirmed"], True),
            "without_social_distancing": extrapolate_social_distancing(df["confirmed"], False)
        }
        df = df.append(extrapolated_values, ignore_index=True)
    return df


def parse_2_json_line_chart_output(df):
    y_series = {}
    for col_name in df.columns.tolist():
        y_series[col_name] = df[col_name].tolist()
    return {"xTimestamps": df["timestamp"].tolist(), "ySeries": y_series}


def parse_2_json_map_chart_output(df):
    countries_json = []
    for row in df.itertuples():
        countries_json.append({
            "country": row[1],
            "metric_value": row[2],
            "extrapolated_metric_value": row[3]
        })
    return countries_json


def get_df_province(time_lines):
    confirmed = parse_time_lines_to_df(time_lines, "confirmed")
    deaths = parse_time_lines_to_df(time_lines, "deaths")
    recovered = parse_time_lines_to_df(time_lines, "recovered")

    df_province = confirmed.merge(deaths, how="outer", left_on="timestamp", right_on="timestamp")
    df_province = df_province.merge(recovered, how="outer", left_on="timestamp", right_on="timestamp")
    df_province = df_province.fillna(0)
    df_province["active"] = df_province["confirmed"] - df_province["recovered"] - df_province["deaths"]

    return df_province


def get_df_country(df, country):
    province_dfs = []
    for row in df.itertuples():
        df_province = get_df_province(row[8])
        province_dfs.append(df_province)

    df_country = pd.concat(province_dfs)
    df_country = df_country.sort_values("timestamp")
    df_timestamp = df_country.groupby("timestamp").sum()
    df_timestamp = df_timestamp.reset_index()
    df_timestamp["country"] = country
    return df_timestamp.rename(columns={"index": "timestamp"})


def filter_df_countries(df, selected_countries=[], excluded_countries=[]):
    if not excluded_countries:
        excluded_countries = []
    excludes_filter = df["country"].isin(excluded_countries)

    if not selected_countries:
        return df.loc[~excludes_filter]
    includes_filter = df["country"].isin(selected_countries)

    return df.loc[~excludes_filter & includes_filter]


def get_all_extrapolated(data_cache, extrapolation_days=3, selected_countries=[], excluded_countries=[]):
    df_countries = data_cache.get_df_countries()
    df_countries = filter_df_countries(df_countries, selected_countries, excluded_countries)

    df_timestamp = df_countries.groupby("timestamp").sum()

    df_timestamp["Estimated cases 0.5%"] = df_timestamp["deaths"] / 0.005
    df_timestamp["Estimated cases 4.0%"] = df_timestamp["deaths"] / 0.04
    df_timestamp["social_distancing"] = df_timestamp["confirmed"]
    df_timestamp["without_social_distancing"] = df_timestamp["confirmed"]

    df_timestamp = df_timestamp.reset_index()
    df_timestamp = df_timestamp.rename(columns={"index": "timestamp"})

    df_extrapolated = extrapolate_values_for_days(df_timestamp, extrapolation_days)

    df_extrapolated = df_extrapolated.rename(
        columns={"active": "Active", "confirmed": "Confirmed", "deaths": "Deaths",
                 "recovered": "Recovered"})

    return parse_2_json_line_chart_output(df_extrapolated)


def get_by_country(data_cache, extrapolation_days=3, selected_countries=[], excluded_countries=[]):
    df_countries = data_cache.get_df_countries()
    df_countries = filter_df_countries(df_countries, selected_countries, excluded_countries)

    country_total_dfs = []
    for country in df_countries["country"].unique():
        df_country = df_countries.loc[df_countries["country"] == country]
        df_country["social_distancing"] = df_country["confirmed"]
        df_country["without_social_distancing"] = df_country["confirmed"]

        extrapolated_values = extrapolate_values_for_days(df_country, extrapolation_days)

        country_total_dfs.append(pd.DataFrame.from_dict({
            "country": [country],
            "active": [df_country["active"].iloc[-1]],
            "confirmed": [df_country["confirmed"].iloc[-1]],
            "deaths": [df_country["deaths"].iloc[-1]],
            "recovered": [df_country["recovered"].iloc[-1]],
            "extrapolated_active": [extrapolated_values["active"]],
            "extrapolated_confirmed": [extrapolated_values["confirmed"]],
            "extrapolated_deaths": [extrapolated_values["deaths"]],
            "extrapolated_recovered": [extrapolated_values["recovered"]],
            "extrapolated_social_distancing": [extrapolated_values["social_distancing"]],
            "extrapolated_without_social_distancing": [extrapolated_values["without_social_distancing"]]}
        ))

    df_countries_total = pd.concat(country_total_dfs)
    df_countries_total = df_countries_total.reset_index(drop=True)

    return parse_2_json_map_chart_output(df_countries_total)
