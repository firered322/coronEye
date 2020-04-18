import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./StateChart.css";

import { dailyStateData } from "../../api";

const StateDailyChart = () => {
  const [dailyState, setDailyStateData] = useState([]);

  useEffect(() => {
    const fetchStatesTimeData = async () => {
      const fetchedDailyData = await dailyStateData();
      setDailyStateData(fetchedDailyData);
    };
    fetchStatesTimeData();
  }, []);
  const lineChart =
    dailyState.length !== 0 ? (
      <Line
        data={{
          labels: dailyState.map((data) => data.date),
          datasets: [
            {
              data: dailyState.map((data) => data.totalconfirmed),
              label: "Total Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyState.map((data) => data.totalrecovered),
              label: "Total Recoveries",
              borderColor: "rgba(0,255,0,1)",
              backgroundColor: "rgba(0,255,0,0.5)",
              fill: true,
            },
            {
              data: dailyState.map((data) => data.totaldeceased),
              label: "Total Deaths",
              borderColor: "rgba(255,0,0,1)",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div className="chart-container">{dailyState.length ? lineChart : null}</div>;
};

export default StateDailyChart;
