import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusinessCard from '../BusinessCard/BusinessCard';
import Grid from '@material-ui/core/Grid';

class BusinessesPage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BUSINESSES' });
  }

  render() {

    const htmlArray = this.props.businesses.map((business, index) => {
      return (
        <Grid key={index} item xs={4}>
          <BusinessCard business={business} />
        </Grid>
      )
    });

    return (
      <div>
        <Grid alignment="stretch" container spacing={3}>
          {htmlArray}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  businesses: state.businesses
});

export default connect(mapStateToProps)(BusinessesPage);
