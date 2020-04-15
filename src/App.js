import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import India from "./components/India/India";
import Learn from "./components/Learn/Learn";
import Navbar from "./components/utils/Navbar";

import { fetchData } from "./api";

class App extends React.Component {
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
    // const homeComponent = () => (
    //   <div className="container">
    //     <Cards data={data} />
    //     <CountryPicker handleCountryChange={this.handleCountryChange} />
    //     <Chart data={data} country={country} />
    //   </div>
    // );
    return (
      <div>
        {/* <Navbar /> */}
        <div className="container">
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
      // <BrowserRouter>
      //   <div>
      //     <Navbar />
      //     <div className="container">
      //       <Route path="/" exact component={homeComponent} />
      //       <Route path="/india" component={India} />
      //       <Route path="/learn" component={Learn} />
      //     </div>
      //   </div>
      // </BrowserRouter>
    );
  }
}

export default App;
