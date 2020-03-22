import React, { Fragment, useEffect, useState } from 'react'
import { Row, Card, Typography } from 'antd'
const { Title } = Typography

const SideInfoBar = ({ rawData, isLoading, filterValues }) => {
  const cardStyle = {
    width: '100%',
    marginBottom: '.5em'
  }
  const style = {
    marginBottom: 0
  }

  const [summaries, setSummaries] = useState({
    deaths: { curr: 0, extr: 0 },
    confirmed: { curr: 0, extr: 0 },
    recovered: { curr: 0, extr: 0 },
    active: { curr: 0, extr: 0 }
  })

  const transformData = () => {
    const { ySeries } = rawData
    const length = ySeries.Deaths.length
    const _summaries = {
      deaths: {
        curr: ySeries.Deaths[
          length - filterValues.extrapolatedDays
        ].toLocaleString(),
        extr: ySeries.Deaths[length - 1].toLocaleString()
      },
      confirmed: {
        curr: ySeries.Confirmed[
          length - filterValues.extrapolatedDays
        ].toLocaleString(),
        extr: ySeries.Confirmed[length - 1].toLocaleString()
      },
      recovered: {
        curr: ySeries.Recovered[
          length - filterValues.extrapolatedDays
        ].toLocaleString()
      },
      active: {
        curr: ySeries.Active[
          length - filterValues.extrapolatedDays
        ].toLocaleString()
      }
    }
    setSummaries(_summaries)
  }

  useEffect(() => {
    if (!rawData) return
    transformData()
    // eslint-disable-next-line
  }, [rawData])

  return (
    <Fragment>
      <Row>
        <Card
          title="Total Infections"
          hoverable
          size="small"
          style={cardStyle}
          loading={isLoading}
        >
          <p style={style}>Current:</p>
          <Title type="danger" level={3} style={style}>
            {summaries.confirmed.curr}
          </Title>
          <p style={style}>With extrapolation:</p>
          <Title type="danger" level={3} style={style}>
            {summaries.confirmed.extr}
          </Title>
        </Card>
      </Row>
      <Row>
        <Card
          title="Total Deaths"
          hoverable
          size="small"
          style={cardStyle}
          loading={isLoading}
        >
          <p style={style}>Current:</p>
          <Title type="danger" level={3} style={style}>
            {summaries.deaths.curr}
          </Title>
          <p style={style}>With extrapolation:</p>
          <Title type="danger" level={3} style={style}>
            {summaries.deaths.extr}
          </Title>
        </Card>
      </Row>
      <Row>
        <Card
          title="Active"
          hoverable
          size="small"
          style={cardStyle}
          loading={isLoading}
        >
          <Title type="primary" level={3} style={style}>
            {summaries.active.curr}
          </Title>
        </Card>
      </Row>
      <Row>
        <Card
          title="Recovered"
          hoverable
          size="small"
          style={cardStyle}
          loading={isLoading}
        >
          <Title type="primary" level={3} style={style}>
            {summaries.recovered.curr}
          </Title>
        </Card>
      </Row>
    </Fragment>
  )
}

export default SideInfoBar
