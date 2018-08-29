import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Paper,
  CssBaseline,
  Typography
} from '@material-ui/core';
import { red, yellow } from '@material-ui/core/colors/red';
import { withFetching } from './components';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: yellow
  }
});

class App extends Component {
  render() {
    const { classes, data, error, isLoading } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Go thermostat
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper className={classes.content} color="default">
            <Typography variant="title">Go thermostat</Typography>
            <Typography variant="body1">
              Control your nest thermostat and view your temperature stats.
            </Typography>
            <div>
              {!data || error || isLoading ? (
                'no data'
              ) : (
                <pre>
                  <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
              )}
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  error: PropTypes.object
};

export default withFetching('/api/thermostat-data')(
  withStyles(styles, { withTheme: true })(App)
);
