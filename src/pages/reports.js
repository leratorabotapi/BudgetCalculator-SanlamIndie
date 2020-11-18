import React from 'react'
import './style.css'
import Copy from '../components/Copy'
import Layout from '../components/layout/Layout'
import { Row, Col } from 'antd'
import { Line, HorizontalBar, Doughnut, Bar } from 'react-chartjs-2'
import Content from '../components/Content'

export default function Reports () {
  const lineData = {
    labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    datasets: [
      {
        label: 'Expenditure',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(0,0,0,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 81, 84]
      }
    ]
  }

  const horiData = {
    labels: ['Transport', 'Shopping', 'Education', 'Food & Drink'],
    datasets: [
      {
        backgroundColor: '#4483CA',
        barThickness: 9,
        data: [65, 59, 80, 81]
      }
    ]
  }

  const donutData = {
    labels: ['Transport', 'Shopping', 'Education', 'Food & Drink'],
    datasets: [
      {
        backgroundColor: [
          '#76C2B6',
          '#00194D',
          '#0151A3',
          '#2E8ED3'
        ],
        hoverBackgroundColor: [
          '#76C2B6',
          '#00194D',
          '#0151A3',
          '#2E8ED3'
        ],
        data: [65, 59, 80, 81]
      }
    ]
  }

  const yearData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [3000, 2800, 2700, 2750, 3000, 2800, 2700, 2750, 3000, 2800, 2700, 2750],
        backgroundColor: '#76C2B6',
        borderColor: '#6610f2',
        barThickness: 9
      },
      {
        label: 'Expenses',
        data: [2550, 2710, 2700, 2750, 2000, 2550, 2710, 2700, 2750, 2000, 1700, 1750],
        backgroundColor: '#00194D',
        borderColor: '#E0E0E0',
        barThickness: 9
      }
    ]
  }
  return (
    <Layout name="reports">
      <Content />
      <div className="App">
      <Row style={{ paddingTop: '45px' }}>
            <Col span={12}>
            <div className="reportDiv1">
              <Copy fontType="H1" weight="bold">Reports</Copy>
            </div>
            </Col>

            <Col span={12}>
              <div className="reportDiv2">
                <Copy fontType="H4" weight="bold">
                  Feedback
                </Copy>
                <Copy style={{ width: '360' }} fontType="Body2">
                Great job! you’re still spending within your budgeted limit for all categories.
                </Copy>
                <progress value="40" max="100"></progress>
              </div>
            </Col>
          </Row>
        <Row>
          <Col span={24}>
          <Copy fontType="H4" weight="bold">Expenditure</Copy>
            <Line
            width={100}
            height={30}
            data={lineData}
            options={{
              responsive: true,
              legend: {
                display: false
              },
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 30,
                  bottom: 50
                }
              },
              scales: {
                yAxes: [
                  {
                    gridLines: {
                      display: true
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}
          />
          </Col>
        </Row>
        <Row>
            <Col span={12}>
            <Copy fontType="H4" weight="bold">Top 5 Merchants</Copy>
                <HorizontalBar data={horiData} options={{
                  responsive: true,
                  legend: {
                    display: false
                  },
                  layout: {
                    padding: {
                      left: 0,
                      right: 15,
                      top: 30,
                      bottom: 25
                    }
                  },
                  scales: {
                    yAxes: [
                      {
                        gridLines: {
                          color: 'rgba(0, 0, 0, 0)'

                        }
                      }
                    ],
                    xAxes: [
                      {
                        gridLines: {
                          color: 'rgba(0, 0, 0, 0)'
                        }
                      }
                    ]
                  }
                }} />
            </Col>
            <Col span={12} >
            <Copy style={{ paddingLeft: '30px' }} fontType="H4" weight="bold">Category Expenditure</Copy>
            <Doughnut
              data={donutData}
              options={{
                responsive: true,
                title: {
                  display: false
                },
                layout: {
                  padding: {
                    left: 0,
                    right: 0,
                    top: 30,
                    bottom: 30
                  }
                },
                legend: {
                  display: true,
                  position: 'right'
                }
              }}
            />
            </Col>
        </Row>
        <Row>
          <Col span={24}>
              <Bar
              width={100}
              height={30}
              data={yearData}
              options={{
                layout: {
                  padding: {
                    left: 0,
                    right: 0,
                    top: 30,
                    bottom: 30
                  }
                },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        drawBorder: false,
                        color: 'rgba(0, 0, 0, 0)'
                      }
                    }
                  ],
                  yAxes: [{
                    gridLines: {
                      drawBorder: false,
                      display: false
                    },
                    ticks: {
                      beginAtZero: true,
                      max: 5000
                    }
                  }]
                }
              }}/>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}
