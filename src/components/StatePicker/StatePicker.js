import React, { useState, useEffect } from "react";
import { FormControl } from "@material-ui/core";

import "./StatePicker.css";

import { getStatesData } from "../../api";

const StatePicker = (props) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const response = await getStatesData();
      const statesObj = response["statewise"].slice(1);
      const statesArr = statesObj.map((item) => item.state);
      setStates(statesArr);
    };
    fetchStates();
  }, []);

  return (
    <FormControl className="cp-formControl">
      <div className="input-group mb-5">
        <select
          className="custom-select"
          id="selector"
          onChange={(e) => props.handleStateChange(e.target.value)}
          defaultValue=""
        >
          {states.map((state, i) => (
            <option key={i} value={state}>
              {state}
            </option>
          ))}
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="selector">
            Select State
          </label>
        </div>
      </div>
    </FormControl>
  );
};

export default StatePicker;
