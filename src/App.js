import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import StyleConfig from './styled-components/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={StyleConfig}>
        <Main />
      </ThemeProvider>
    );
  }
}

export default App;
