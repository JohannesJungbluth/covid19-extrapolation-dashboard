from swagger_server.models.inline_response200 import InlineResponse200
from swagger_server.common import data_helper
from swagger_server.common.covid19 import COVID19

API = COVID19()


def all_get(extrapolation_days=None, selected_countries=None, excluded_countries=None):
    """Timeline data for all countries

    :param extrapolation_days: 
    :type extrapolation_days: int
    :param selected_countries: 
    :type selected_countries: List[str]
    :param excluded_countries: 
    :type excluded_countries: List[str]

    :rtype: InlineResponse200
    """
    return data_helper.get_all_extrapolated(API, extrapolation_days, selected_countries, excluded_countries)


def by_country_get(extrapolation_days=None, selected_countries=None, excluded_countries=None,
                   metric=None):
    """Timeline data for all countries

     # noqa: E501

    :param extrapolation_days: 
    :type extrapolation_days: int
    :param selected_countries: 
    :type selected_countries: List[str]
    :param excluded_countries: 
    :type excluded_countries: List[str]
    :param metric: 
    :type metric: str

    :rtype: List[InlineResponse2001]
    """
    return data_helper.get_by_country(API, extrapolation_days, selected_countries, excluded_countries, metric)
