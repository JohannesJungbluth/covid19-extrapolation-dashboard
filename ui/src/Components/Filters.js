import React, { useState } from 'react'
import { Select, Row, Col, Form, Card, Switch, InputNumber } from 'antd'
const { Option } = Select

const StockChart = ({ filterValues, setFilterValues }) => {
  const allCountries = ['Germany', 'USA', 'China', 'Italy']
  const size = 'small'
  const style = {
    marginBottom: 0,
    width: '100%'
  }
  return (
    <Card hoverable size="small">
      <Row gutter={16}>
        <Col span={8}>
          <Form style={{ width: '100%' }}>
            <Form.Item label="Filter by Countries" style={style}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Filter by Countries..."
                onChange={value =>
                  setFilterValues({
                    ...filterValues,
                    selectedCountries: value
                  })
                }
                value={filterValues.selectedCountries}
                size={size}
              >
                {allCountries.map(country => (
                  <Option key={country}>{country}</Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Form layout="inline" style={{ width: '100%' }}>
            <Form.Item label="Exclude Countries" style={{ width: '100%' }}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Exclude Countries..."
                onChange={value =>
                  setFilterValues({
                    ...filterValues,
                    excludedCountries: value
                  })
                }
                value={filterValues.excludedCountries}
                size={size}
              >
                {allCountries.map(country => (
                  <Option key={country}>{country}</Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Col>
        <Col span={3}>
          <Form layout="inline" style={{ width: '100%' }}>
            <Form.Item label="Logarithmic" style={{ width: '100%' }}>
              <Switch
                onChange={value =>
                  setFilterValues({
                    ...filterValues,
                    isLogarithmic: value
                  })
                }
                checked={filterValues.isLogarithmic}
              />
            </Form.Item>
          </Form>
        </Col>
        <Col span={5}>
          <Form layout="inline" style={{ width: '100%' }}>
            <Form.Item label="Extrapolated days" style={{ width: '100%' }}>
              <InputNumber
                size={size}
                min={0}
                max={30}
                defaultValue={3}
                onChange={value =>
                  setFilterValues({
                    ...filterValues,
                    extrapolatedDays: value
                  })
                }
                value={filterValues.extrapolatedDays}
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default StockChart
