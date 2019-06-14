import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import BusinessCard from '../BusinessCard/BusinessCard';
import Grid from '@material-ui/core/Grid';
import './HomePage.css';


class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_FIVE' });
  }
  render() {

    const htmlArray = this.props.topFive.map((business, index) => {
      return (
        <Grid key={index} item xs={4}>
          <BusinessCard business={business} />
        </Grid>
      )
    });

    return (
      <div class="list-bg-img">
        <h1 id="welcome">
          Welcome to Kansas City, {this.props.user.username}!
        </h1>
        <h2 id="welcome">
          Hot Spots
        </h2>
        <Grid alignment="stretch" container spacing={3}>
          {htmlArray}
        </Grid>
        <br/>
        <LogOutButton className="log-in" />
      </div>
    )
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  topFive: state.topFive,
  businesses: state.businesses,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);