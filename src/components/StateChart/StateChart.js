import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./StateChart.css";

const StateChart = (props) => {
  const pieChart = (
    <Pie
      data={{
        labels: ["Active", "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: [
              "rgba(0,180,219, 1)",
              "rgba(107,229,133, 1)",
              "rgba(237,33,58, 1)",
            ],
            data: [
              props.state.active,
              props.state.recovered,
              props.state.deaths,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Statistics for ${props.state.state}` },
      }}
    ></Pie>
  );

  return props.state.active ? (
    <div className="row state-chart-container">
      <div className="col-lg-9">
        <div className="state-chart">{pieChart}</div>
      </div>
      <div className="col-lg-3">
        <div className="state-chart-data">
          <div>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Chart Legends
                </Typography>
                <hr />
                <Typography variant="body2" component="p">
                  <div className="legend-sep">
                    <div className="flexer-t">
                      <span className="pc-total"></span>
                      <p> : Total Cases</p>
                    </div>
                    <div className="flexer-r">
                      <span className="pc-recovered"></span>
                      <p> : Total Recovered</p>
                    </div>
                    <div className="flexer-d">
                      <span className="pc-deaths"></span>
                      <p> : Total Deaths</p>
                    </div>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default StateChart;
