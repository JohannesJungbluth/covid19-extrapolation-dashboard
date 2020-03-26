# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class InlineResponse200YSeries(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, active: List[int]=None, confirmed: List[int]=None, confirmed_with_social_distancing: List[int]=None, confirmed_without_social_distancing: List[int]=None, deaths: List[int]=None, recovered: List[int]=None):  # noqa: E501
        """InlineResponse200YSeries - a model defined in Swagger

        :param active: The active of this InlineResponse200YSeries.  # noqa: E501
        :type active: List[int]
        :param confirmed: The confirmed of this InlineResponse200YSeries.  # noqa: E501
        :type confirmed: List[int]
        :param confirmed_with_social_distancing: The confirmed_with_social_distancing of this InlineResponse200YSeries.  # noqa: E501
        :type confirmed_with_social_distancing: List[int]
        :param confirmed_without_social_distancing: The confirmed_without_social_distancing of this InlineResponse200YSeries.  # noqa: E501
        :type confirmed_without_social_distancing: List[int]
        :param deaths: The deaths of this InlineResponse200YSeries.  # noqa: E501
        :type deaths: List[int]
        :param recovered: The recovered of this InlineResponse200YSeries.  # noqa: E501
        :type recovered: List[int]
        """
        self.swagger_types = {
            'active': List[int],
            'confirmed': List[int],
            'confirmed_with_social_distancing': List[int],
            'confirmed_without_social_distancing': List[int],
            'deaths': List[int],
            'recovered': List[int]
        }

        self.attribute_map = {
            'active': 'Active',
            'confirmed': 'Confirmed',
            'confirmed_with_social_distancing': 'Confirmed with social distancing',
            'confirmed_without_social_distancing': 'Confirmed without social distancing',
            'deaths': 'Deaths',
            'recovered': 'Recovered'
        }
        self._active = active
        self._confirmed = confirmed
        self._confirmed_with_social_distancing = confirmed_with_social_distancing
        self._confirmed_without_social_distancing = confirmed_without_social_distancing
        self._deaths = deaths
        self._recovered = recovered

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse200YSeries':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_ySeries of this InlineResponse200YSeries.  # noqa: E501
        :rtype: InlineResponse200YSeries
        """
        return util.deserialize_model(dikt, cls)

    @property
    def active(self) -> List[int]:
        """Gets the active of this InlineResponse200YSeries.


        :return: The active of this InlineResponse200YSeries.
        :rtype: List[int]
        """
        return self._active

    @active.setter
    def active(self, active: List[int]):
        """Sets the active of this InlineResponse200YSeries.


        :param active: The active of this InlineResponse200YSeries.
        :type active: List[int]
        """

        self._active = active

    @property
    def confirmed(self) -> List[int]:
        """Gets the confirmed of this InlineResponse200YSeries.


        :return: The confirmed of this InlineResponse200YSeries.
        :rtype: List[int]
        """
        return self._confirmed

    @confirmed.setter
    def confirmed(self, confirmed: List[int]):
        """Sets the confirmed of this InlineResponse200YSeries.


        :param confirmed: The confirmed of this InlineResponse200YSeries.
        :type confirmed: List[int]
        """

        self._confirmed = confirmed

    @property
    def confirmed_with_social_distancing(self) -> List[int]:
        """Gets the confirmed_with_social_distancing of this InlineResponse200YSeries.


        :return: The confirmed_with_social_distancing of this InlineResponse200YSeries.
        :rtype: List[int]
        """
        return self._confirmed_with_social_distancing

    @confirmed_with_social_distancing.setter
    def confirmed_with_social_distancing(self, confirmed_with_social_distancing: List[int]):
        """Sets the confirmed_with_social_distancing of this InlineResponse200YSeries.


        :param confirmed_with_social_distancing: The confirmed_with_social_distancing of this InlineResponse200YSeries.
        :type confirmed_with_social_distancing: List[int]
        """

        self._confirmed_with_social_distancing = confirmed_with_social_distancing

    @property
    def confirmed_without_social_distancing(self) -> List[int]:
        """Gets the confirmed_without_social_distancing of this InlineResponse200YSeries.


        :return: The confirmed_without_social_distancing of this InlineResponse200YSeries.
        :rtype: List[int]
        """
        return self._confirmed_without_social_distancing

    @confirmed_without_social_distancing.setter
    def confirmed_without_social_distancing(self, confirmed_without_social_distancing: List[int]):
        """Sets the confirmed_without_social_distancing of this InlineResponse200YSeries.


        :param confirmed_without_social_distancing: The confirmed_without_social_distancing of this InlineResponse200YSeries.
        :type confirmed_without_social_distancing: List[int]
        """

        self._confirmed_without_social_distancing = confirmed_without_social_distancing

    @property
    def deaths(self) -> List[int]:
        """Gets the deaths of this InlineResponse200YSeries.


        :return: The deaths of this InlineResponse200YSeries.
        :rtype: List[int]
        """
        return self._deaths

    @deaths.setter
    def deaths(self, deaths: List[int]):
        """Sets the deaths of this InlineResponse200YSeries.


        :param deaths: The deaths of this InlineResponse200YSeries.
        :type deaths: List[int]
        """

        self._deaths = deaths

    @property
    def recovered(self) -> List[int]:
        """Gets the recovered of this InlineResponse200YSeries.


        :return: The recovered of this InlineResponse200YSeries.
        :rtype: List[int]
        """
        return self._recovered

    @recovered.setter
    def recovered(self, recovered: List[int]):
        """Sets the recovered of this InlineResponse200YSeries.


        :param recovered: The recovered of this InlineResponse200YSeries.
        :type recovered: List[int]
        """

        self._recovered = recovered