import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CartNavigation from '../CartNavigation/CartNavigation';
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import './Navigation.css';
import { useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div className="Navigation">
      <AppBar position="static">
        <Toolbar color="primary">
          <Button className="white-color" component={Link} to="/">
            <Typography variant="h6" noWrap>
              Sample eCommerce
          </Typography>
          </Button>
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
