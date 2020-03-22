import connexion
import six

from swagger_server.models.inline_response200 import InlineResponse200  # noqa: E501
from swagger_server.models.inline_response2001 import InlineResponse2001  # noqa: E501
from swagger_server import util


def all_get(extrapolation_days=None, selected_countries=None, excluded_countries=None):  # noqa: E501
    """Timeline data for whole world

     # noqa: E501

    :param extrapolation_days: 
    :type extrapolation_days: int
    :param selected_countries: 
    :type selected_countries: List[str]
    :param excluded_countries: 
    :type excluded_countries: List[str]

    :rtype: InlineResponse200
    """
    return 'do some magic!'


def by_country_get(extrapolation_days=None, selected_countries=None, excluded_countries=None):  # noqa: E501
    """Latest data for every countries

     # noqa: E501

    :param extrapolation_days: 
    :type extrapolation_days: int
    :param selected_countries: 
    :type selected_countries: List[str]
    :param excluded_countries: 
    :type excluded_countries: List[str]

    :rtype: List[InlineResponse2001]
    """
    return 'do some magic!'
