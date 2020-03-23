import React, { Fragment, useState, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card, Select, Switch, Spin } from 'antd'
import axios from 'axios'
import _ from 'lodash'
const { Option } = Select
require('echarts/map/js/world.js')

const WorldChart = ({ filterValues, setFilterValues, height = 700 }) => {
  const metrics = [
    'Active',
    'Confirmed',
    'Deaths',
    'Recovered',
    'Extrapolated Active',
    'Extrapolated Confirmed',
    'Extrapolated Deaths',
    'Extrapolated Recovered',
    'Extrapolated Social Distancing Confirmed',
    'Extrapolated Without Social Distancing Confirmed'
  ]
  const [selectedMetric, setSelectedMetric] = useState('Confirmed')
  // const [isExtrapolated, setIsExtrapolated] = useState(false)
  // const [isSocialDistancing, setIsSocialDistancing] = useState(false)
  const [countryData, setCountryData] = useState([])
  const [maxValue, setMaxValue] = useState(10)
  const [isLoading, setIsLoading] = useState(false)

  const chartOptions = {
    tooltip: { show: true },
    visualMap: {
      left: 'right',
      min: 1,
      max: maxValue,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      },
      text: ['High', 'Low'], // 文本，默认为数值文本
      calculable: true
    },
    series: [
      {
        name: selectedMetric,
        type: 'map',
        // itemStyle: {
        //   color: 'purple'
        // },
        emphasis: {
          label: {
            show: true
          }
        },
        map: 'world',
        // coordinateSystem: 'geo',
        roam: true,
        nameProperty: 'NAME',
        // symbolSize: data => Math.max(5, data[2] / 5),
        // symbolSize: 2000,
        // data: [
        //   { name: 'Germany', value: 15000 },
        //   { name: 'Italy', value: 40000 }
        // ],
        data: countryData.map(doc => {
          let key = _.snakeCase(selectedMetric)
          if (key === 'extrapolated_without_social_distancing_confirmed') {
            key = 'extrapolated_without_social_distancing'
          } else if (key === 'extrapolated_social_distancing_confirmed') {
            key = 'extrapolated_social_distancing'
          }
          return {
            name: doc.country === 'US' ? 'United States' : doc.country,
            value: doc[key]
          }
        })
      }
    ]
  }

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get('https://corona-hackathon.herokuapp.com/by_country', {
        params: {
          extrapolation_days: filterValues.extrapolatedDays,
          metric: selectedMetric.toLowerCase()
        }
      })
      console.log('data: ', data)
      setCountryData(data)
      setIsLoading(false)
    } catch (err) {
      console.log('Err fetching data by_country: ', err.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!countryData.length) return
    let key = _.snakeCase(selectedMetric)
    console.log('key: ', key)
    if (key === 'extrapolated_without_social_distancing_confirmed') {
      key = 'extrapolated_without_social_distancing'
    } else if (key === 'extrapolated_social_distancing_confirmed') {
      key = 'extrapolated_social_distancing'
    }
    const max = _.maxBy(countryData, key)[key]
    console.log('max: ', max)
    setMaxValue(max)
    // eslint-disable-next-line
  }, [selectedMetric, countryData])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData()
    }, 1000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [filterValues.extrapolatedDays])

  const onChartEvents = {
    click: e => {
      console.log('e.name: ', e.name)
      let name = e.name
      if (name === 'United States') name = 'US'
      setFilterValues({
        ...filterValues,
        selectedCountries: [name]
      })
    }
  }

  return (
    <Spin spinning={isLoading} size="large">
      <Card
        hoverable
        title="World Map"
        size="small"
        extra={
          <Fragment>
            {/* Extrapolated:&nbsp;&nbsp; */}
            {/* <Switch */}
            {/*   onChange={value => setIsExtrapolated(value)} */}
            {/*   checked={isExtrapolated} */}
            {/* /> */}
            {/* &nbsp;&nbsp;Social Distancing:&nbsp;&nbsp; */}
            {/* <Switch */}
            {/*   onChange={value => setIsSocialDistancing(value)} */}
            {/*   checked={isSocialDistancing} */}
            {/*   disabled={!isExtrapolated} */}
            {/* /> */}
            &nbsp;&nbsp; Select Metric:&nbsp;&nbsp;
            <Select
              placeholder="Select metric..."
              onChange={value => setSelectedMetric(value)}
              value={selectedMetric}
              style={{ width: '30em' }}
            >
              {metrics.map(metric => (
                <Option key={metric}>{metric}</Option>
              ))}
            </Select>
          </Fragment>
        }
      >
        <ReactEcharts
          option={chartOptions}
          notMerge={true}
          lazyUpdate={true}
          style={{ height, width: '100%' }}
          onEvents={onChartEvents}
        />
      </Card>
    </Spin>
  )
}

export default WorldChart
