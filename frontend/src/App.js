import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import items from './MenuList';

import {
  Grid,
  Card,
  CardActions,
} from '@material-ui/core';

export default function App() {
  return (
    <BrowserRouter>
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={2}>
        <Sidebar items={items} />
      </Grid>
      <Grid item xs={10}>
        <Card variant="outlined" style={{border: 'none'}}>
          <CardActions style={{justifyContent: "center"}}>
            <Switch>
              <Route component={SignIn} exact path="/" />
              <Route component={SignUp} exact path="/users/register" />
              <Route component={Profile} exact path="/users/profile" />
            </Switch>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </BrowserRouter>
  );
}
