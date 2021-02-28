//App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // Redirect,
  Route
} from 'react-router-dom';
import routes from './Config/routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route
          key={route.path}
          path={route.path}
          component={route.component}
          />
        ))}
      </Switch>
    </Router>
  )
};

export default App;