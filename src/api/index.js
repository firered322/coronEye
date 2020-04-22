import axios from "axios";

const URL = "https://covid19.mathdro.id/api";
const stateWiseURL = "https://api.covid19india.org/data.json";
// const districtWiseURL =
//   "https://api.covid19india.org/v2/state_district_wise.json";

export const fetchData = async (country) => {
  let tempURL = URL;

  if (country) {
    tempURL = `${URL}/countries/${country}`;
  }
  try {
    const { data } = await axios.get(tempURL);
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

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.error(error.message);
  }
};

export const getStatesData = async (stateName) => {
  if (stateName) {
    try {
      let { data } = await axios.get(stateWiseURL);
      let statesArray = data["statewise"];
      let stateInfo = statesArray.filter((s) => s.state === stateName);
      return stateInfo;
    } catch (error) {
      console.error(error.message);
    }
  }
  try {
    const { data } = await axios.get(stateWiseURL);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const dailyStateData = async () => {
  try {
    let { data } = await axios.get(stateWiseURL);
    let dailyDataArr = data["cases_time_series"];
    return dailyDataArr;
  } catch (error) {
    console.error(error.message);
  }
};
