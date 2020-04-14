import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

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
      <div class="input-group mb-5">
        <select class="custom-select" id="selector" onChange={(e) => props.handleCountryChange(e.target.value)} defaultValue="">
          {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
        </select>
        <div class="input-group-append">
          <label class="input-group-text" for="selector">
            Select Country
          </label>
        </div>
      </div>

    </FormControl>
  );
};

export default CountryPicker;
