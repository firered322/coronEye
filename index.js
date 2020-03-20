const path = require("path");

const express = require("express");
const rp = require("request-promise");
const ejs = require("ejs");

const app = express();

app.use(express.urlencoded())

app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const PORT = 8887;

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/countries/:country", async (req, res) => {
  const countryName = req.params.country;
  const options = {
    method: "GET",
    uri: `https://api.covid19api.com/summary`,
    json: true
  };
  let response;
  try {
    response = await rp(options);
  } catch (error) {
    console.error(error);
  }
  if (response["Countries"].length) {
    let countryDetails = response["Countries"].filter(item => {
      return item["Country"].toLowerCase() == countryName;
    });
    res.send(countryDetails);
  }
});

app.get("/countries", async (req, res) => {
  const options = {
    method: "GET",
    uri: `https://api.covid19api.com/summary`,
    json: true
  };

  let response;

  try {
    response = await rp(options);
  } catch (error) {
    console.error(error);
  }

  let countriesArr = [];

  if (response["Countries"].length) {
    response["Countries"].forEach(item => {
      countriesArr.push(item.Country);
    });

    res.render("pages/countries", {
      countries: countriesArr
    });
  }
});

app.listen(PORT, () => {
  console.log(`Running at ${PORT}`);
});
