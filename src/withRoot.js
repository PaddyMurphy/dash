import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// optional theme overrides
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B75DE3',
      main: '#a41edc',
      dark: '#7d06a7',
    },
    // secondary: {
    //   light: green[300],
    //   main: green[500],
    //   dark: green[700],
    // },
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
