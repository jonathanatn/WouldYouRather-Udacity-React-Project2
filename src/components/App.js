import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Questions from './Questions';
import Nav from './Nav';
import Login from './Login';
import NewQuestion from './NewQuestion';
import LeaderBoard from './Leaderboard';
import CardPage from './CardPage';
import Page404 from './Page404';
import { Switch } from 'react-router-dom';

class App extends Component {
      componentDidMount() {
            this.props.dispatch(handleInitialData());
      }
      render() {
            return (
                  <Router>
                        <Fragment>
                              <Nav user={this.props} />
                              <div>
                                    <Switch>
                                          <Route
                                                path="/"
                                                exact
                                                component={Questions}
                                          />
                                          <Route
                                                path="/login"
                                                exact
                                                component={Login}
                                          />
                                          <Route
                                                path="/leaderboard"
                                                exact
                                                component={LeaderBoard}
                                          />
                                          <Route
                                                path="/add"
                                                exact
                                                component={NewQuestion}
                                          />
                                          <Route
                                                path="/questions/:id"
                                                exact
                                                component={CardPage}
                                          />
                                          <Route component={Page404} />
                                    </Switch>
                              </div>
                        </Fragment>
                  </Router>
            );
      }
}

function mapStateToProps({ authedUser }) {
      return {
            authedUser
      };
}

export default connect(mapStateToProps)(App);
