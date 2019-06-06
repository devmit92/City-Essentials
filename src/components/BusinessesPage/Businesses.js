import React, {Component} from 'react';
import { connect } from 'react-redux';


class BusinessesPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_BUSINESSES'});
  }

  render()  {
      // const htmlArray = this.props.users.map(business => (
      //         <li>
      //             {business}
      //         </li>
      // ))

      return (
          <div>
            <ul>
              {/* {htmlArray} */}
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
  