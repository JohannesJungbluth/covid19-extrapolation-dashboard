import React, { Fragment, useState, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card, Spin } from 'antd'
import { DateTime } from 'luxon'

const LineChart = ({
  filterValues,
  title,
  height = 500,
  rawData,
  isLoading
}) => {
  const [axisData, setAxisData] = useState({
    xAxisData: [],
    yAxisData: []
  })

  const getLineColor = name => {
    if (name === 'Deaths') {
      return '#820014'
    } else if (name === 'Recovered') {
      return '#52c41a'
    } else if (name === 'Active') {
      return '#f5222d'
    } else if (name === 'Confirmed') {
      return '#fadb14'
    } else if (name === 'Extrapolation') {
      return '#bfbfbf'
    }
  }

  const fetchData = async () => {
    if (!rawData) return
    console.log('fetching data')
    const formatXData = data => {
      console.log('formatting xData')
      const xLabels = data.xTimestamps.map(timestamp => {
        const date = DateTime.fromISO(timestamp)
        return date.toLocaleString({ month: 'short', day: 'numeric' })
      })
      return xLabels
    }

    console.log('filterValues: ', filterValues)

    const formatYData = (data, xLabels) => {
      const yAxisData = []
      for (const ySerieName in data.ySeries) {
        yAxisData.push({
          name: ySerieName,
          series: data.ySeries[ySerieName]
        })
      }
      yAxisData.push({
        name: 'Extrapolation',
        series: [],
        markArea: [
          [
            {
              name: 'Extrapolation',
              xAxis: xLabels[xLabels.length - filterValues.extrapolatedDays]
            },
            {
              xAxis: xLabels[xLabels.length - 1]
            }
          ]
        ]
      })
      console.log('yAxisData: ', yAxisData)
      return yAxisData
    }

    // const { data } = await axios.get('http://localhost:8080/all', {
    //   params: {
    //     extrapolation_days: filterValues.extrapolatedDays
    //   }
    // })
    // const data = getLocalData()
    const data = rawData
    console.log('data: ', data)
    console.log('formatXData')
    const xLabels = formatXData(data)
    console.log('formatYData')
    const yData = formatYData(data, xLabels)
    const axisData = {
      xAxisData: xLabels,
      yAxisData: yData
    }
    console.log('axisData: ', axisData)
    setAxisData(axisData)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [rawData])

  const chartOptions = {
    xAxis: {
      type: 'category',
      data: axisData.xAxisData
    },
    yAxis: {
      type: filterValues.isLogarithmic ? 'log' : 'value'
    },
    legend: {
      data: axisData.yAxisData
        .map(({ name }) => name)
        .filter(name => name !== 'timestamp' && name !== 'Extrapolation')
    },
    series: axisData.yAxisData.map(({ series, markArea, name }) => ({
      name,
      itemStyle: {
        color: getLineColor(name)
      },
      lineStyle: {
        width: 3,
        color: getLineColor(name)
      },
      data: series,
      markArea: {
        data: markArea
      },
      type: 'line',
      smooth: true
    })),
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    // visualMap: {
    //   type: 'continuous',
    //   show: false,
    //   dimension: 0,
    //   pieces: [
    //     {
    //       gte: '15-03-2020',
    //       color: 'green'
    //     }
    //   ]
    // },
    dataZoom: [
      {
        type: 'inside'
        // start: 0,
        // end: 10
      },
      {
        // start: 0,
        // end: 10,
        handleIcon:
          'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }
    ]
  }

  return (
    <Fragment>
      <Spin spinning={isLoading} size="large">
        <Card
          hoverable
          title="Infections and deaths of all countries"
          size="small"
        >
          <ReactEcharts
            option={chartOptions}
            notMerge={true}
            lazyUpdate={true}
            style={{ height, width: '100%' }}
          />
        </Card>
      </Spin>
    </Fragment>
  )
}

export default LineChart
