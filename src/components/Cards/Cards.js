import React from "react";

import "./Cards.css";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = (props) => {
  console.log(props);
  if (!props.data.confirmed) {
    return "Loading";
  }
  return (
    <div className="container">
      <Grid container spacing={3} justif="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">{props.data.confirmed.value}</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">NUmber of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">NUmber of active recoveries</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography variant="body2">NUmber of active Dearhs</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
