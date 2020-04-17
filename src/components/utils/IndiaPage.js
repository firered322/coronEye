import React from "react";

import India from "../India/India";
import StatePicker from "../StatePicker/StatePicker";

import { getStatesData } from "../../api";

class IndiaPage extends React.Component {
  state = {
    data: {},
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
      </div>
    );
  }
}

export default IndiaPage;
