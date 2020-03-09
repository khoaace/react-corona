/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Corona from 'containers/CoronaGeneral/Loadable';
import Navbar from 'components/Navbar';

// Route
import PrivateRoute from 'components/PrivateRoute';
import LoggedOutRoute from 'components/LoggedOutRoute';
import PropsRoute from 'components/PropsRoute';

//Navbar
import { Container } from "react-bootstrap";
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Container fluid className="p-0">
        <Navbar />
        <Switch>
          <PropsRoute exact path="/" component={Corona} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Container>
    </div>
  );
}
