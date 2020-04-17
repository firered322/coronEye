import React, { useState, useEffect } from "react";
import { getStatesData } from "../../api";
import { Pie } from "react-chartjs-2";

import "./StateChart.css";

const StateChart = (props) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedDailyData = await getStatesData();
      setDailyData(fetchedDailyData);
    };
    fetchAPI();
  }, []);

  const pieChart = true ? (
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
            data: [2323, 131, 323   ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Statistics for ${props}` },
      }}
    ></Pie>
  ) : null;

  return (
    <div className="chart-container">{pieChart}</div>
  );
};

export default StateChart;
