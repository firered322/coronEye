import React, { useState, useEffect } from "react";

import { getStatesData } from "../../api";

const India = () => {
  const [statesData, setStatesData] = useState([]);
  useEffect(() => {
    const getStates = async () => {
      setStatesData(getStatesData());
    };
    getStates();
  }, []);
  return (
    <div>
      <h1>India Coming Soon...</h1>
    </div>
  );
};

export default India;
