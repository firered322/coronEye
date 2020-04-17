import React from "react";

import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import CountryPicker from "../CountryPicker/CountryPicker";

import { fetchData } from "../../api";

class HomePage extends React.Component {
  state = {
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data, country } = this.state;

    return (
      <div className="container ">
        <p className="pageHead">Global Statistics</p>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default HomePage;
