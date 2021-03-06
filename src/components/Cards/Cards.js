import React from "react";
import CountUp from "react-countup";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import "./Cards.css";

const Cards = (props) => {
  if (!props.data.confirmed) {
    return "Loading";
  }
  return (
    <div className="card-container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card confirmed">
          <CardContent>
            <h3 color="textSecondary" gutterBottom>
              Infected
            </h3>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.confirmed.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Last updated: {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Total COVID-19 cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <h3 color="textSecondary" gutterBottom>
              Recovered
            </h3>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.recovered.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Last updated: {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Total recoveries made</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card deaths">
          <CardContent>
            <h3 color="textSecondary" gutterBottom>
              Deceased
            </h3>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.deaths.value}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              Last updated: {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Total deaths from COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
