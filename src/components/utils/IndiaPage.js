import React from "react";

import India from "../India/India";
import StatePicker from "../StatePicker/StatePicker";
import StateDailyChart from "../StateChart/StateDailyChart";
import StateChart from "../StateChart/StateChart";

import { getStatesData } from "../../api";

class IndiaPage extends React.Component {
  state = {
    data: {},
    stateInd: {},
  };

  handleStateChange = async (state) => {
    const statesData = await getStatesData(state);
    this.setState({ stateInd: statesData[0] });
  };

  async componentDidMount() {
    const statesData = await getStatesData();
    this.setState({ data: statesData });
  }
  render() {
    const { data, stateInd } = this.state;
    return (
      <div className="container ">
        <p className="pageHead">India Statistics</p>
        <India total={data} />
        <StateDailyChart />
        <br />
        <StatePicker handleStateChange={this.handleStateChange} />
        <StateChart state={stateInd} />
      </div>
    );
  }
}

export default IndiaPage;
