# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class InlineResponse2001(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, country: str=None, active: int=None, confirmed: int=None, deaths: int=None, recovered: int=None, extrapolated_active: int=None, extrapolated_confirmed: int=None, extrapolated_deaths: int=None, extrapolated_recovered: int=None, extrapolated_social_distancing: int=None, extrapolated_without_social_distancing: int=None):  # noqa: E501
        """InlineResponse2001 - a model defined in Swagger

        :param country: The country of this InlineResponse2001.  # noqa: E501
        :type country: str
        :param active: The active of this InlineResponse2001.  # noqa: E501
        :type active: int
        :param confirmed: The confirmed of this InlineResponse2001.  # noqa: E501
        :type confirmed: int
        :param deaths: The deaths of this InlineResponse2001.  # noqa: E501
        :type deaths: int
        :param recovered: The recovered of this InlineResponse2001.  # noqa: E501
        :type recovered: int
        :param extrapolated_active: The extrapolated_active of this InlineResponse2001.  # noqa: E501
        :type extrapolated_active: int
        :param extrapolated_confirmed: The extrapolated_confirmed of this InlineResponse2001.  # noqa: E501
        :type extrapolated_confirmed: int
        :param extrapolated_deaths: The extrapolated_deaths of this InlineResponse2001.  # noqa: E501
        :type extrapolated_deaths: int
        :param extrapolated_recovered: The extrapolated_recovered of this InlineResponse2001.  # noqa: E501
        :type extrapolated_recovered: int
        :param extrapolated_social_distancing: The extrapolated_social_distancing of this InlineResponse2001.  # noqa: E501
        :type extrapolated_social_distancing: int
        :param extrapolated_without_social_distancing: The extrapolated_without_social_distancing of this InlineResponse2001.  # noqa: E501
        :type extrapolated_without_social_distancing: int
        """
        self.swagger_types = {
            'country': str,
            'active': int,
            'confirmed': int,
            'deaths': int,
            'recovered': int,
            'extrapolated_active': int,
            'extrapolated_confirmed': int,
            'extrapolated_deaths': int,
            'extrapolated_recovered': int,
            'extrapolated_social_distancing': int,
            'extrapolated_without_social_distancing': int
        }

        self.attribute_map = {
            'country': 'country',
            'active': 'active',
            'confirmed': 'confirmed',
            'deaths': 'deaths',
            'recovered': 'recovered',
            'extrapolated_active': 'extrapolated_active',
            'extrapolated_confirmed': 'extrapolated_confirmed',
            'extrapolated_deaths': 'extrapolated_deaths',
            'extrapolated_recovered': 'extrapolated_recovered',
            'extrapolated_social_distancing': 'extrapolated_social_distancing',
            'extrapolated_without_social_distancing': 'extrapolated_without_social_distancing'
        }
        self._country = country
        self._active = active
        self._confirmed = confirmed
        self._deaths = deaths
        self._recovered = recovered
        self._extrapolated_active = extrapolated_active
        self._extrapolated_confirmed = extrapolated_confirmed
        self._extrapolated_deaths = extrapolated_deaths
        self._extrapolated_recovered = extrapolated_recovered
        self._extrapolated_social_distancing = extrapolated_social_distancing
        self._extrapolated_without_social_distancing = extrapolated_without_social_distancing

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2001':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_1 of this InlineResponse2001.  # noqa: E501
        :rtype: InlineResponse2001
        """
        return util.deserialize_model(dikt, cls)

    @property
    def country(self) -> str:
        """Gets the country of this InlineResponse2001.


        :return: The country of this InlineResponse2001.
        :rtype: str
        """
        return self._country

    @country.setter
    def country(self, country: str):
        """Sets the country of this InlineResponse2001.


        :param country: The country of this InlineResponse2001.
        :type country: str
        """

        self._country = country

    @property
    def active(self) -> int:
        """Gets the active of this InlineResponse2001.


        :return: The active of this InlineResponse2001.
        :rtype: int
        """
        return self._active

    @active.setter
    def active(self, active: int):
        """Sets the active of this InlineResponse2001.


        :param active: The active of this InlineResponse2001.
        :type active: int
        """

        self._active = active

    @property
    def confirmed(self) -> int:
        """Gets the confirmed of this InlineResponse2001.


        :return: The confirmed of this InlineResponse2001.
        :rtype: int
        """
        return self._confirmed

    @confirmed.setter
    def confirmed(self, confirmed: int):
        """Sets the confirmed of this InlineResponse2001.


        :param confirmed: The confirmed of this InlineResponse2001.
        :type confirmed: int
        """

        self._confirmed = confirmed

    @property
    def deaths(self) -> int:
        """Gets the deaths of this InlineResponse2001.


        :return: The deaths of this InlineResponse2001.
        :rtype: int
        """
        return self._deaths

    @deaths.setter
    def deaths(self, deaths: int):
        """Sets the deaths of this InlineResponse2001.


        :param deaths: The deaths of this InlineResponse2001.
        :type deaths: int
        """

        self._deaths = deaths

    @property
    def recovered(self) -> int:
        """Gets the recovered of this InlineResponse2001.


        :return: The recovered of this InlineResponse2001.
        :rtype: int
        """
        return self._recovered

    @recovered.setter
    def recovered(self, recovered: int):
        """Sets the recovered of this InlineResponse2001.


        :param recovered: The recovered of this InlineResponse2001.
        :type recovered: int
        """

        self._recovered = recovered

    @property
    def extrapolated_active(self) -> int:
        """Gets the extrapolated_active of this InlineResponse2001.


        :return: The extrapolated_active of this InlineResponse2001.
        :rtype: int
        """
        return self._extrapolated_active

    @extrapolated_active.setter
    def extrapolated_active(self, extrapolated_active: int):
        """Sets the extrapolated_active of this InlineResponse2001.


        :param extrapolated_active: The extrapolated_active of this InlineResponse2001.
        :type extrapolated_active: int
        """

        self._extrapolated_active = extrapolated_active

    @property
    def extrapolated_confirmed(self) -> int:
        """Gets the extrapolated_confirmed of this InlineResponse2001.


        :return: The extrapolated_confirmed of this InlineResponse2001.
        :rtype: int
        """
        return self._extrapolated_confirmed

    @extrapolated_confirmed.setter
    def extrapolated_confirmed(self, extrapolated_confirmed: int):
        """Sets the extrapolated_confirmed of this InlineResponse2001.


        :param extrapolated_confirmed: The extrapolated_confirmed of this InlineResponse2001.
        :type extrapolated_confirmed: int
        """

        self._extrapolated_confirmed = extrapolated_confirmed

    @property
    def extrapolated_deaths(self) -> int:
        """Gets the extrapolated_deaths of this InlineResponse2001.


        :return: The extrapolated_deaths of this InlineResponse2001.
        :rtype: int
        """
        return self._extrapolated_deaths

    @extrapolated_deaths.setter
    def extrapolated_deaths(self, extrapolated_deaths: int):
        """Sets the extrapolated_deaths of this InlineResponse2001.


        :param extrapolated_deaths: The extrapolated_deaths of this InlineResponse2001.
        :type extrapolated_deaths: int
        """

        self._extrapolated_deaths = extrapolated_deaths

    @property
    def extrapolated_recovered(self) -> int:
        """Gets the extrapolated_recovered of this InlineResponse2001.


        :return: The extrapolated_recovered of this InlineResponse2001.
        :rtype: int
        """
        return self._extrapolated_recovered

    @extrapolated_recovered.setter
    def extrapolated_recovered(self, extrapolated_recovered: int):
        """Sets the extrapolated_recovered of this InlineResponse2001.


        :param extrapolated_recovered: The extrapolated_recovered of this InlineResponse2001.
        :type extrapolated_recovered: int
        """

        self._extrapolated_recovered = extrapolated_recovered

    @property
    def extrapolated_social_distancing(self) -> int:
        """Gets the extrapolated_social_distancing of this InlineResponse2001.


        :return: The extrapolated_social_distancing of this InlineResponse2001.
        :rtype: int
        """
        return self._extrapolated_social_distancing

    @extrapolated_social_distancing.setter
    def extrapolated_social_distancing(self, extrapolated_social_distancing: int):
        """Sets the extrapolated_social_distancing of this InlineResponse2001.


        :param extrapolated_social_distancing: The extrapolated_social_distancing of this InlineResponse2001.
        :type extrapolated_social_distancing: int
        """

        self._extrapolated_social_distancing = extrapolated_social_distancing

    @property
    def extrapolated_without_social_distancing(self) -> int:
        """Gets the extrapolated_without_social_distancing of this InlineResponse2001.


        :return: The extrapolated_without_social_distancing of this InlineResponse2001.
        :rtype: int
        """
        return self._extrapolated_without_social_distancing

    @extrapolated_without_social_distancing.setter
    def extrapolated_without_social_distancing(self, extrapolated_without_social_distancing: int):
        """Sets the extrapolated_without_social_distancing of this InlineResponse2001.


        :param extrapolated_without_social_distancing: The extrapolated_without_social_distancing of this InlineResponse2001.
        :type extrapolated_without_social_distancing: int
        """

        self._extrapolated_without_social_distancing = extrapolated_without_social_distancing
