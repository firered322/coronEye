import React from "react";

import India from "../India/India";

import { getStatesData } from "../../api";

class IndiaPage extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const statesData = await getStatesData();
    // console.log(statesData);
    this.setState({ data: statesData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container ">
        <p className="pageHead">India Statistics</p>
        <India total={data} />
      </div>
    );
  }
}

export default IndiaPage;
