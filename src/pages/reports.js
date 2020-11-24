import React, { useContext } from "react"
import TransactionContext from '../context/transations'
import "./style.css"
import Copy from "../components/Copy"
import Layout from "../components/layout/Layout"
import { Row, Col } from "antd"
import { Line, HorizontalBar, Doughnut, Bar } from "react-chartjs-2"
import Content from "../components/Content"
import 'chartjs-plugin-datalabels'

export default function Reports({location}) {

  const lineData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Amount in Rands",
        data: [120, 190, 300, 50, 20, 30, 200],
        backgroundColor: "rgba(230, 233, 250, 0.3)",
        borderColor: "rgba(70,78,88,1)",
        pointBackgroundColor: "rgba(0,25,77,1)",

        borderWidth: 1,
      },
    ],
  }

  const horiData = {
    labels: ["Brand1", "Brand2", "Brand3", "Brand4"],
    datasets: [
      {
        backgroundColor: "#4483CA",
        barThickness: 9,
        data: [65, 59, 80, 81],
      },
    ],
  }

  const donutData = {
    labels: ["Transport", "Shopping", "Education", "Food & Drink"],
    datasets: [
      {
        backgroundColor: ["#76C2B6", "#00194D", "#0151A3", "#2E8ED3"],
        hoverBackgroundColor: ["#76C2B6", "#00194D", "#0151A3", "#2E8ED3"],
        data: [65, 59, 80, 81],
      },
    ],
  }

  const yearData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [
          3000,
          2800,
          2700,
          2750,
          3000,
          2800,
          2700,
          2750,
          3000,
          2800,
          2700,
          2750,
        ],
        backgroundColor: "#76C2B6",
        borderColor: "#6610f2",
        barThickness: 9,
      },
      {
        label: "Expenses",
        data: [
          2550,
          2710,
          2700,
          2750,
          2000,
          2550,
          2710,
          2700,
          2750,
          2000,
          1700,
          1750,
        ],
        backgroundColor: "#00194D",
        borderColor: "#E0E0E0",
        barThickness: 9,
      },
    ],
  }

  
  return (
    <Layout name="reports">
      <Content />
      <div className="App">
        <Row style={{ paddingTop: "45px" }}>
          <Col span={12}>
            <div className="reportDiv1">
              <Copy fontType="H1" weight="bold">
                Reports
              </Copy>
            </div>
          </Col>
          <Col span={12}>
            <div className="reportDiv2">
              <Copy fontType="H4" weight="bold">
                Feedback
              </Copy>
              <Copy style={{ width: "360" }} fontType="Body2">
                Great job! you’re still spending within your budgeted limit for
                all categories.
              </Copy>
              <progress
                value={location?.state?.finalTotalMoneyOut}
                max={location?.state?.finalTotalMoneyIn}
              ></progress>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "30px" }}>
          <Col span={24}>
            <Copy fontType="H4" weight="bold">
              Expenditure
            </Copy>
            <Line
              width={100}
              height={30}
              data={lineData}
              options={{
                plugins: {
                  datalabels: {
                      display: false,
                  },
              },
                responsive: true,
                legend: {
                  display: false,
                },
                layout: {
                  padding: {
                    left: 0,
                    right: 0,
                    top: 30,
                    bottom: 50,
                  },
                },
                scales: {
                  y: {
                    stacked: true,
                  },
                  yAxes: [
                    {
                      gridLines: {
                        drawBorder: false,
                        display: true,
                      },
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className="graphDiv2">
            <Copy fontType="H4" weight="bold">
              Top 5 Merchants
            </Copy>
            <HorizontalBar
              data={horiData}
              options={{
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
                  ticks: [{
                    fontSize: 26,
                    fontColor: '#fff'
                  }],
                  yAxes: [{
                    gridLines: {
                      drawBorder: true,
                      display: false
                    }
                  }],
                  xAxes: [
                    {
                      gridLines: {
                        color: 'rgba(0, 0, 0, 0)'
                      }
                    }
                  ]
                }
              }}
            />
            </div>
          </Col>
          <Col span={12}>
          <div className="graphDiv3">
              
            <Copy style={{ paddingLeft: "30px" }} fontType="H4" weight="bold">
              Category Expenditure
            </Copy>
            <Doughnut
              data={donutData}
              options={{
                plugins: {
                  datalabels: {
                    color: '#ffffff',
                    anchor: 'center',
                    align: 'center',
                    formatter: Math.round,
                    font: {
                      weight: 'light',
                      size: 18
                    }
                  }
                },            
                responsive: true,
                title: {
                  display: false,
                },
                layout: {
                  padding: {
                    left: 0,
                    right: 0,
                    top: 30,
                    bottom: 30,
                  },
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Bar
              width={100}
              height={30}
              data={yearData}
              options={{
                plugins: {
                  datalabels: {
                      display: false,
                  },
              },
                layout: {
                  padding: {
                    left: 0,
                    right: 0,
                    top: 30,
                    bottom: 30,
                  },
                },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        drawBorder: false,
                        color: "rgba(0, 0, 0, 0)",
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        drawBorder: false,
                        display: false,
                      },
                      ticks: {
                        beginAtZero: true,
                        max: 5000,
                      },
                    },
                  ],
                },
              }}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

