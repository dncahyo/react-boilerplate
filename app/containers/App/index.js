/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MapPage from 'containers/MapPage';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  widht: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/leaflet.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet-sidebar-v2@1.0.0/css/leaflet-sidebar.min.css" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" compnent={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/map" component={MapPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
