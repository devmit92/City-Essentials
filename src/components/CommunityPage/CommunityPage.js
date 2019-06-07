import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommunityPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_COMMUNITY' });
  }

  render() {

    const htmlArray = this.props.community.map((community, index ) => {
      return (
        <div key={index}>
          <p>{community.post_date}</p>
          <p>{community.post_time}</p>
        </div>
      )
    });

    return (
      <div>
        <ul>
          {htmlArray}
        </ul>
        <input
            type="text"
            placeholder="New Post"
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  community: state.community,
});

export default connect(mapStateToProps)(CommunityPage);
