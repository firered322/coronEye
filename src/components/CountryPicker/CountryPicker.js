import React, { useState, useEffect } from "react";
import { FormControl } from "@material-ui/core";

import "./CountryPicker.css";

import { getCountries } from "../../api";

const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await getCountries());
    };
    fetchCountries();
  }, []);

  return (
    <FormControl className="cp-formControl">
      <div className="input-group mb-3">
        <select className="custom-select" id="selector" onChange={(e) => props.handleCountryChange(e.target.value)} defaultValue="">
          {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="selector">
            Select Country
          </label>
        </div>
      </div>

    </FormControl>
  );
};

export default CountryPicker;
