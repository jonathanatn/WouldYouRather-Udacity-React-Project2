import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
      componentDidMount() {
            if (this.props.authedUser === null) {
                  this.props.history.push(`/login`);
            }
      }
      render() {
            const { users } = this.props;
            let usersArray = users.map(user => [
                  user.id,
                  user.name,
                  user.questions.length,
                  Object.keys(user.answers).length,
                  user.questions.length + Object.keys(user.answers).length
            ]);

            usersArray.sort(function(a, b) {
                  return b[4] - a[4];
            });

            return (
                  <div className="container">
                        <div
                              className="row justify-content-center"
                              style={{ marginTop: 50 + 'px' }}
                        >
                              <h3>Leaderboard</h3>
                        </div>
                        <div className="row justify-content-center">
                              <div className="list-group ">
                                    {usersArray.map(user => (
                                          <div
                                                className="card mt-3"
                                                style={{ width: 18 + 'rem' }}
                                                key={user[0]}
                                                id={user[0]}
                                          >
                                                <div className="card-header bg-transparent">
                                                      {user[1]}
                                                </div>
                                                <div className="card-body">
                                                      <h6 className="card-subtitle mb-2 text-muted">
                                                            Question asked:{' '}
                                                            <span className="float-right">
                                                                  {user[2]}
                                                            </span>
                                                      </h6>
                                                      <h6 className="card-subtitle mb-2 text-muted">
                                                            Question answered:{' '}
                                                            <span className="float-right">
                                                                  {user[3]}
                                                            </span>
                                                      </h6>
                                                      <h5 className="card-title">
                                                            Total:{' '}
                                                            <span className="float-right">
                                                                  {user[4]}
                                                            </span>
                                                      </h5>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            );
      }
}

function mapStateToProps({ users, authedUser }) {
      return {
            users: Object.values(users),
            authedUser
      };
}

export default connect(mapStateToProps)(Leaderboard);
