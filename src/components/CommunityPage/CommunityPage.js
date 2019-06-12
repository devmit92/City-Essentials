import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommunityPage extends Component {
    state = {
        newPost: '',
        likes: 0,
    };

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_COMMUNITY' });
    }

    handleInputChange = (event) => {
        this.setState({
            newPost: event.target.value
        })
    }


    render() {

        const htmlArray = this.props.community.map((community, index) => {
            console.log('Community info', community);
            return (
                <div key={index}>
                    <p>{community.username}</p>
                    <p>{community.posting_date}</p>
                    <p>{community.posting_time}</p>
                    <p>{community.posting_content}</p>
                    <p>{community.post_likes}</p>
                    <button onClick={() => { this.props.dispatch({ type: 'POST_LIKES', payload: community.community_id }) }}>Like!</button>
                </div>
            )
        });

        console.log('HI!, ', this.props.community);

        return (
            <div>
                <ul>
                    {htmlArray}
                </ul>
                <input
                    type="text"
                    placeholder="New Post"
                    onChange={this.handleInputChange}
                />
                <button onClick={() => { this.props.dispatch({ type: 'POST_COMMUNITY', payload: this.state.newPost }) }}>Save Post</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    community: state.community,
});

export default connect(mapStateToProps)(CommunityPage);
