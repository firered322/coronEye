import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";

import "./Chart.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedDailyData = await fetchDailyData();
      console.log(fetchDailyData);
      setDailyData(fetchedDailyData);
    };
    fetchAPI();
  }, []);

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map((data) => data.data),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths),
              label: "deaths",
              borderColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div>{lineChart}</div>;
};

export default Chart;
