import React, { Fragment } from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card, Select, Switch } from 'antd'
const { Option } = Select
require('echarts/map/js/world.js')

const WorldChart = ({ filterValues, height = 700 }) => {
  const metrics = ['Active', 'Confirmed', 'Deaths', 'Recovered']
  const chartOptions = {
    visualMap: {
      left: 'right',
      min: 1,
      max: 100000,
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
        data: [
          { name: 'Germany', value: 15000 },
          { name: 'Italy', value: 40000 }
        ]
      }
    ]
  }

  return (
    <Card
      hoverable
      title="World Map"
      size="small"
      extra={
        <Fragment>
          Extrapolated:&nbsp;&nbsp;
          <Switch />
          &nbsp;&nbsp; Select Metric:&nbsp;&nbsp;
          <Select
            placeholder="Select metric..."
            onChange={() => {}}
            defaultValue={'Confirmed'}
            style={{ width: '10em' }}
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
      />
    </Card>
  )
}

export default WorldChart
