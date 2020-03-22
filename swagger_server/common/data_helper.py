import pandas as pd
import math


def parse_time_lines_to_df(time_line_data, col_name):
    df = pd.DataFrame(time_line_data[col_name])
    df = df[df["timeline"] != 0]
    df = df.reset_index()
    df = df.rename(columns={"index": "timestamp", "timeline": col_name})
    return df[["timestamp", col_name]]


def extrapolate_value(series):
    # extrapolate value by calculating mean delta factor of last 3 rows
    factor = (series.tail(3) / series.shift(1).tail(3)).mean()
    if math.isnan(factor):
        factor = 0
    return int(factor * series.iloc[-1])


def extrapolate_values_for_days(df, number_of_days):
    for _ in range(number_of_days):
        extra_day = (pd.Timestamp(df.iloc[-1]["timestamp"]) + pd.Timedelta("1 days")).isoformat()
        extra_day = extra_day[:-6] + "Z"
        extrapolated_values = {"timestamp": extra_day}
        for col_name in df.columns:
            if col_name != "timestamp":
                extrapolated_values[col_name] = extrapolate_value(df[col_name])
        df = df.append(extrapolated_values, ignore_index=True)
    return df


def extrapolate_value_for_metric_and_days(df, number_of_days, metric):
    df_extrapolated = df.copy()
    extrapolated_values = {}
    for _ in range(number_of_days):
        extrapolated_values = {}
        for col_name in df_extrapolated.columns:
            if col_name == metric:
                extrapolated_values[col_name] = extrapolate_value(df_extrapolated[col_name])
        df_extrapolated = df_extrapolated.append(extrapolated_values, ignore_index=True)
    return extrapolated_values


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
        df_province["country"] = country
        province_dfs.append(df_province)

    df_country = pd.concat(province_dfs)
    df_country = df_country.sort_values("timestamp")
    df_timestamp = df_country.groupby("timestamp").sum()
    df_timestamp = df_timestamp.reset_index()
    return df_timestamp.rename(columns={"index": "timestamp"})


def get_all_extrapolated(api, extrapolation_days=3, selected_countries="", excluded_countries=""):
    response = api.get_all(time_lines=True)
    df_response = pd.DataFrame.from_dict(response["locations"])

    country_dfs = []
    for country in df_response["country"].unique():
        if excluded_countries and country in excluded_countries:
            continue
        if not selected_countries or (selected_countries and country in selected_countries):
            df_country = df_response.loc[df_response["country"] == country]
            df_country = get_df_country(df_country, country)
            country_dfs.append(df_country)

    df_countries = pd.concat(country_dfs)
    df_countries = df_countries.reset_index(drop=True)

    df_timestamp = df_countries.groupby("timestamp").sum()

    df_timestamp["Estimated confirmed 0.5%"] = df_timestamp["deaths"] / 0.005
    df_timestamp["Estimated confirmed 4.0%"] = df_timestamp["deaths"] / 0.04

    df_timestamp = df_timestamp.reset_index()
    df_timestamp = df_timestamp.rename(columns={"index": "timestamp"})

    df_extrapolated = extrapolate_values_for_days(df_timestamp, extrapolation_days)

    df_extrapolated = df_extrapolated.rename(
        columns={"active": "Active", "confirmed": "Confirmed", "deaths": "Deaths",
                 "recovered": "Recovered"})

    return parse_2_json_line_chart_output(df_extrapolated)


def get_by_country(api, extrapolation_days=3, selected_countries="", excluded_countries="", metric="confirmed"):
    response = api.get_all(time_lines=True)
    df_response = pd.DataFrame.from_dict(response["locations"])

    country_dfs = []
    for country in df_response["country"].unique():
        if excluded_countries and country in excluded_countries:
            continue
        if not selected_countries or (selected_countries and country in selected_countries):
            df_country = df_response.loc[df_response["country"] == country]
            df_country = get_df_country(df_country, country)

            extrapolated_values = extrapolate_value_for_metric_and_days(df_country, extrapolation_days, metric)

            country_dfs.append(pd.DataFrame.from_dict({
                "country": [country],
                "metric_value": [df_country[metric].iloc[-1]],
                "extrapolated_metric_value": [extrapolated_values[metric]]}
            ))

    df_countries = pd.concat(country_dfs)
    df_countries = df_countries.reset_index(drop=True)

    return parse_2_json_map_chart_output(df_countries)
