import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(URL);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);
    const modifiedData = data.map((data) => ({
      confirmed: data.confirmed.total,
      deaths: data.deaths.total,
      data: data.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.error(error.message);
  }
};
