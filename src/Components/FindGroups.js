import React from "react";
import "../styles.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4)
  }
}));

function FindGroups() {
  const classes = useStyles();

  const data = [
    { group: 1, members: 2 },
    { group: 2, members: 3 },
    { group: 3, members: 1 },
    { group: 4, members: 4 }
  ];

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        {data.map(elem => (
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
            <Card>
              <CardHeader
                title={`Group ${elem.group}`}
                subheader={`Members: ${elem.members}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FindGroups;
