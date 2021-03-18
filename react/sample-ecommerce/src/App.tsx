import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart.lazy';
import Home from './components/Home/Home.lazy';
import Navigation from './components/Navigation/Navigation';
import store from './services/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
