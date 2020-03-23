import React, { useState, useEffect } from 'react'
import './App.css'
import { Layout } from 'antd'
import LineChart from './Components/LineChart.js'
import SideInfoBar from './Components/SideInfoBar.js'
import WorldChart from './Components/WorldChart.js'
import Filters from './Components/Filters.js'
import { Row, Col } from 'antd'
import axios from 'axios'
import qs from 'qs'
const { Header, Content } = Layout

function App() {
  const [filterValues, setFilterValues] = useState({
    selectedCountries: [],
    excludedCountries: [],
    isLogarithmic: false,
    extrapolatedDays: 7
  })

  const [rawData, setRawData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    console.log('fetching data from server')
    try {
      if (!filterValues.extrapolatedDays) return
      setIsLoading(true)
      const {
        selectedCountries,
        excludedCountries,
        extrapolatedDays
      } = filterValues
      const params = {
        extrapolation_days: extrapolatedDays,
        selected_countries: selectedCountries.length
          ? selectedCountries.join(',')
          : undefined,
        excluded_countries: excludedCountries.length
          ? excludedCountries.join(',')
          : undefined
      }
      console.log('params: ', params)
      // const { data } = await axios.get('http://3.127.148.241:8080/all', {
      const { data } = await axios.get('https://corona-hackathon.herokuapp.com/all', {
        params
        // paramsSerializer: params => {
        //   return qs.stringify(params)
        // }
      })
      console.log('got data from server: ', data)
      setRawData(data)
      setIsLoading(false)
    } catch (err) {
      console.error('Error while fetching data: ', err.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData()
    }, 1000)
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [
    filterValues.extrapolatedDays,
    filterValues.selectedCountries,
    filterValues.excludedCountries
  ])

  return (
    <div className="App">
      <Layout>
        <Content style={{ height: '98vh' }}>
          <Header>
            <h1 style={{ color: 'white' }}>
              Coronavirus Forecasts (Please stay at home and save lives)
            </h1>
          </Header>
          <Row style={{ height: '.5em' }}></Row>
          <Row
            gutter={24}
            style={{ paddingLeft: '.5em', paddingRight: '.5em' }}
          >
            <Col span={24}>
              <Filters
                filterValues={filterValues}
                setFilterValues={setFilterValues}
              />
            </Col>
          </Row>
          <Row style={{ height: '.5em' }}></Row>
          <Row gutter={8} style={{ paddingLeft: '.5em', paddingRight: '.5em' }}>
            <Col span={4}>
              <SideInfoBar
                rawData={rawData}
                filterValues={filterValues}
                isLoading={isLoading}
              ></SideInfoBar>
            </Col>
            <Col span={20}>
              <LineChart
                filterValues={filterValues}
                rawData={rawData}
                isLoading={isLoading}
              ></LineChart>
            </Col>
          </Row>
          <Row style={{ height: '.5em' }}></Row>
          <Row gutter={8} style={{ paddingLeft: '.5em', paddingRight: '.5em' }}>
            <Col span={24}>
              <WorldChart
                filterValues={filterValues}
                setFilterValues={setFilterValues}
              ></WorldChart>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default App
