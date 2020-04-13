import React from "react";
import "./App.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        {/* <CountryPicker /> */}
        {/* <Chart /> */}
      </div>
    );
  }
}

export default App;
