import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Dashboard from './pages/home';
import MintEarning from './pages/mintEarning';
import Explore from './pages/explore';
import Admin from './pages/admin';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app = () => (
  <div className="wraper" style={{ background: 'url(./img/background/page-bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
    <GlobalStyles />
    <PosedRouter>
      <ScrollTop path="/">
        <Dashboard path="/" >
          <Redirect to="/" />
        </Dashboard>
        <MintEarning path="/mint" />
        <Explore path="/explore" />
        <Admin path="/admin" />
      </ScrollTop>
    </PosedRouter>
    <ScrollToTopBtn />
  </div>
);
export default app;