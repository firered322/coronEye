const path = require("path");

const express = require("express");
const rp = require("request-promise");
const ejs = require('ejs')

const app = express();

app.use("/public", express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');

const PORT = 8887;

app.get("/:country", async (req, res) => {
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

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(PORT, () => {
  console.log(`Running at ${PORT}`);
});
