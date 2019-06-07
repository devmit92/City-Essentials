import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import BusinessesPage from '../BusinessesPage/Businesses';
import HomePage from '../HomePage/HomePage';
import CommunityPage from '../CommunityPage/CommunityPage';

import './App.css';


class App extends Component {
    componentDidMount () {
        this.props.dispatch({type: 'FETCH_USER'})
    }

    render() {
        return (
            <div>
                <Router>
                    <Nav />
                    <Switch>
                        {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
                        <Redirect exact from="/" to="/home" />
                        {/* For protected routes, the view could show one of several things on the same route.
                        Visiting localhost:3000/home will show the UserPage if the user is logged in.
                        If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
                        Even though it seems like they are different pages, the user is always on localhost:3000/home */}
                        <ProtectedRoute
                            exact
                            path="/businesses"
                            component={BusinessesPage}
                        />
                        <ProtectedRoute
                            exact
                            path="/community"
                            component={CommunityPage}
                        />
                        <ProtectedRoute
                            exact
                            path="/home"
                            component={HomePage}
                        />
                        {/* If none of the other routes matched, we will show a 404. */}
                        <Route exact path="/home" component={HomePage} />
                        <Route render={() => <h1>404</h1>} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default connect()(App);
