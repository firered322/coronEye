import React from "react";
import CountUp from "react-countup";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const India = (props) => {
  if (!props.total.statewise) {
    return "Loading";
  }

  return (
    <div className="container">
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
                  end={props.total.statewise[0].confirmed}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                Last updated: {props.total.statewise[0].lastupdatedtime}
              </Typography>
              <Typography variant="body1">
                New cases reported today:{" "}
                {props.total.statewise[0].deltaconfirmed}
              </Typography>
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
                  end={props.total.statewise[0].recovered}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                Last updated: {props.total.statewise[0].lastupdatedtime}
              </Typography>
              <Typography variant="body1">
                New recoveries made today:{" "}
                {props.total.statewise[0].deltarecovered}
              </Typography>
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
                  end={props.total.statewise[0].deaths}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                Last updated: {props.total.statewise[0].lastupdatedtime}
              </Typography>
              <Typography variant="body1">
                Deaths today: {props.total.statewise[0].deltadeaths}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default India;
