import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import './Nav.css';
import { cyan } from '@material-ui/core/colors';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

const orangeTheme = createMuiTheme({ palette: { primary: orange } })
const cyanTheme = createMuiTheme({ palette: { primary: cyan } })
const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: {
      main: '#eceff1',
    },
  },
});


class Nav extends Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <MuiThemeProvider theme={orangeTheme}>
          <AppBar position="static">
            <Toolbar>
              <MuiThemeProvider theme={theme}>
              <Link to="/home" className={this.props.classes.title}>
              <MuiThemeProvider theme={theme}>
                <Typography variant="h3" color="secondary" >
                  City Essentials
                </Typography>
                </MuiThemeProvider>
              </Link>
              </MuiThemeProvider>
              <div>
                <Link className="nav-link" to="/home">
                  {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
                  {this.props.user.id ? 'Home' : 'Login / Register'}
                </Link>
                {/* Show the link to the info page and the logout button if the user is logged in */}
                {this.props.user.id && (
                  <>
                    <Link className="nav-link" to="/businesses">
                      Businesses Page
          </Link>
                    <Link className="nav-link" to="/community">
                      Community Page
          </Link>
                    <LogOutButton className="nav-link" />
                  </>
                )}
              </div>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    )
  }
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Nav));
