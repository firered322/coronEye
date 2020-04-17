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
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={props.total.statewise[0].confirmed}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {/* Last updated: {new Date(props.data.lastUpdate).toDateString()} */}
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
                  end={props.total.statewise[0].recovered}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {/* Last updated: {new Date(props.data.lastUpdate).toDateString()} */}
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
                  end={props.total.statewise[0].deaths}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {/* Last updated: {new Date(props.data.lastUpdate).toDateString()} */}
              </Typography>
              <Typography variant="body2">
                Total deaths from COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default India;
