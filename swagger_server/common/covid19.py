import requests


class COVID19:
    url = ""
    previousData = None
    latestData = None

    def __init__(self, url="https://coronavirus-tracker-api.herokuapp.com"):
        self.url = url

    def _update(self, time_lines):
        latest = self.get_latest()
        locations = self.get_locations(time_lines)
        if self.latestData:
            self.previousData = self.latestData
        self.latestData = {
            "latest": latest,
            "locations": locations
        }

    def _request(self, endpoint, params=None):
        response = requests.get(self.url + endpoint, params)
        response.raise_for_status()
        return response.json()

    def get_all(self, time_lines=False):
        self._update(time_lines)
        return self.latestData

    def get_latest_changes(self):
        changes = None
        if self.previousData:
            changes = {
                "confirmed": self.latestData["latest"]["confirmed"] - self.latestData["latest"]["confirmed"],
                "deaths": self.latestData["latest"]["deaths"] - self.latestData["latest"]["deaths"],
                "recovered": self.latestData["latest"]["recovered"] - self.latestData["latest"]["recovered"],
            }
        else:
            changes = {
                "confirmed": 0,
                "deaths": 0,
                "recovered": 0,
            }
        return changes

    def get_latest(self):
        data = self._request("/v2/latest")
        return data["latest"]

    def get_locations(self, time_lines=False, rank_by=None):
        data = None
        if time_lines:
            data = self._request("/v2/locations", {"timelines": str(time_lines).lower()})
        else:
            data = self._request("/v2/locations")

        data = data["locations"]

        ranking_criteria = ['confirmed', 'deaths', 'recovered']
        if rank_by is not None:
            if rank_by not in ranking_criteria:
                raise ValueError("Invalid ranking criteria. Expected one of: %s" % ranking_criteria)

            ranked = sorted(data, key=lambda i: i['latest'][rank_by], reverse=True)
            data = ranked

        return data

    def get_location_by_country_code(self, country_code, time_lines=False):
        data = None
        if time_lines:
            data = self._request("/v2/locations", {"country_code": country_code, "timelines": str(time_lines).lower()})
        else:
            data = self._request("/v2/locations", {"country_code": country_code})
        return data["locations"]

    def get_location_by_id(self, id):
        data = self._request("/v2/locations/" + str(id))
        return data["location"]
