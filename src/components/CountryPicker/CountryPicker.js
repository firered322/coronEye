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
      <NativeSelect
        defaultValue=""
        onChange={(e) => props.handleCountryChange(e.target.value)}
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
