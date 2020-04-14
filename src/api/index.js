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
    const { data } = axios.get(`${URL}/daily`);
  } catch (error) {
    console.error(error.message);
  }
};
