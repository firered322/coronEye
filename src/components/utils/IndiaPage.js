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
    this.setState({ data: statesData, stateInd: statesData['statewise'][1] });
  }
  render() {
    const { data, stateInd } = this.state;
    return (
      <div className="container ">
        <h2>India Statistics</h2>
        <India total={data} />
        <StateDailyChart />
        <StatePicker handleStateChange={this.handleStateChange} />
        <StateChart state={stateInd} />
      </div>
    );
  }
}

export default IndiaPage;
