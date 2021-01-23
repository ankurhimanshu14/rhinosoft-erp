import React from 'react';
import {
  makeStyles,
  Card,
  CardActions
} from '@material-ui/core';

import SignIn from './elements/SignIn';

const useStyles = makeStyles({
  root: {
    maxWidth: 'auto',
  },
});

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions>

          <SignIn />

      </CardActions>
    </Card>
  );
}
