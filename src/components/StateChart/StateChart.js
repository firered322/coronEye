import React from "react";
import { Pie } from "react-chartjs-2";

import "./StateChart.css";

const StateChart = (props) => {
  console.log(props);
  const pieChart = props.state.confirmed ? (
    <Pie
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              props.state.confirmed,
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
  ) : null;

  return <div className="chart-container">{pieChart}</div>;
};

export default StateChart;
