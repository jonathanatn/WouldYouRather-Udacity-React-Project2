import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
      render() {
            return (
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="App container">
                              <NavLink className="navbar-brand" to="/" exact>
                                    WYR
                              </NavLink>
                              <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                              >
                                    <span className="navbar-toggler-icon" />
                              </button>

                              <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                              >
                                    <ul className="navbar-nav mr-auto">
                                          <li className="nav-item">
                                                <NavLink
                                                      className="nav-link"
                                                      to="/"
                                                      exact
                                                      activeClassName="active"
                                                >
                                                      Questions
                                                </NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink
                                                      className="nav-link"
                                                      to="/add"
                                                      activeClassName="active"
                                                >
                                                      Add question
                                                </NavLink>
                                          </li>

                                          <li className="nav-item">
                                                <NavLink
                                                      className="nav-link"
                                                      to="/leaderboard"
                                                      activeClassName="active"
                                                >
                                                      Leaderboard
                                                </NavLink>
                                          </li>
                                    </ul>
                                    <ul className="navbar-nav">
                                          <li className="nav-item">
                                                <p className="nav-link">
                                                      Hello,{' '}
                                                      {this.props.user &&
                                                            this.props.user
                                                                  .name}
                                                </p>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink
                                                      className="nav-link"
                                                      to="/login"
                                                      activeClassName="active"
                                                >
                                                      Sign out
                                                </NavLink>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </nav>
            );
      }
}

function mapStateToProps({ authedUser, users }) {
      const user = users[authedUser];

      return {
            user
      };
}

export default connect(mapStateToProps)(Nav);
