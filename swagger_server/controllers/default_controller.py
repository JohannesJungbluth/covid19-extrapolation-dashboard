from swagger_server.models.inline_response200 import InlineResponse200
from swagger_server.common import data_helper, data_cache

DATA_CACHE = data_cache.DataCache()


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
    return data_helper.get_all_extrapolated(DATA_CACHE, extrapolation_days, selected_countries, excluded_countries)


def by_country_get(extrapolation_days=None, selected_countries=None, excluded_countries=None):
    """Timeline data for all countries

     # noqa: E501

    :param extrapolation_days: 
    :type extrapolation_days: int
    :param selected_countries: 
    :type selected_countries: List[str]
    :param excluded_countries: 
    :type excluded_countries: List[str]

    :rtype: List[InlineResponse2001]
    """
    # because of performance issues with country number always extrapolate 7 days and load from cache
    return data_helper.get_total_by_country_filtered(DATA_CACHE, selected_countries, excluded_countries)
