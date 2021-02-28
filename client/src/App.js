//App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  // Redirect,
  Route
} from 'react-router-dom';
import routes from './Config/routes';
import { RegisterProvider } from './Context';
import AppRoutes from './Components/AppRoutes';

const App = () => {
  return (
    <RegisterProvider>
    <Router>
      <Switch>
        {routes.map(route => (
          <AppRoutes
          key={route.path}
          path={route.path}
          component={route.component}
          />
        ))}
      </Switch>
    </Router>
    </RegisterProvider>
  )
};

export default App;