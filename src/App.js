import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route } from 'react-router-dom';
import { history } from './_config';
import Main from './components/Main';
import StyleConfig from './styled-components/theme';
/* import { PrivateRoute } from './PrivateRoute';
import HomePage from './containers/HomePage';
import { LoginPage } from './containers/LoginPage';
import { RegisterPage } from './containers/RegisterPage'; */

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={StyleConfig}>
        <Router history={history}>
          <div>
            <Route path="/" component={Main} />
            {/* <PrivateRoute path="/profile" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} /> */}
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
