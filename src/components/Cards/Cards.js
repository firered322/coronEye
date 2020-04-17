import React from "react";
import CountUp from "react-countup";

import "./Cards.css";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = (props) => {
  if (!props.data.confirmed) {
    return "Loading";
  }
  return (
    <div className="card-container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="card confirmed">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
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
            <Typography variant="body2">Active COVID-19 cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
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
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
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
