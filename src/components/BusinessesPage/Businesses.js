import React, { Component } from 'react';
import { connect } from 'react-redux';


class BusinessesPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BUSINESSES' });
  }

  render() {

    const htmlArray = this.props.businesses.map((business, index ) => {
      return (
        <div key={index}>
          <p>{business.business_name}</p>
          <p>{business.address}</p>
          <p>{business.city_name}</p>
          <p>{business.phone_number}</p>
          <p>{business.hours}</p>
          <a href={business.website}>{business.website}</a>
        </div>
      )
    });

    return (
      <div>
        <ul>
          {htmlArray}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  businesses: state.businesses
});

export default connect(mapStateToProps)(BusinessesPage);
