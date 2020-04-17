import React from "react";

import India from "../India/India";
import StatePicker from "../StatePicker/StatePicker";
import StateChart from '../StateChart/StateChart'

import { getStatesData } from "../../api";

class IndiaPage extends React.Component {
  state = {
    data: {},
    stateInd: "",
  };

  handleStateChange = async (country) => {
    const statesData = await getStatesData(country);
    this.setState({ data: statesData, country: country });
  };

  async componentDidMount() {
    const statesData = await getStatesData();
    this.setState({ data: statesData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container ">
        <p className="pageHead">India Statistics</p>
        <India total={data} />
        <StatePicker />
        <StateChart />
      </div>
    );
  }
}

export default IndiaPage;
