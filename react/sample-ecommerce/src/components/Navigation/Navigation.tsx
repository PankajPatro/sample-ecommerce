import { AppBar, Button, Toolbar } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartNavigation from '../CartNavigation/CartNavigation';
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div className="Navigation">
      <AppBar position="static">
        <Toolbar color="primary">
          <span>Sample eCommerce</span>
          {location.pathname === '/cart' &&
            <>
              <div className="flexGrow">
              </div>
              <Button className="white-color" component={Link} to="/">
                <HomeOutlined />
              </Button>
            </>
          }
          {location.pathname !== '/cart' && <>
            <div className="flexGrow">
              <GlobalSearch></GlobalSearch>
            </div>
            <CartNavigation></CartNavigation>
          </>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
