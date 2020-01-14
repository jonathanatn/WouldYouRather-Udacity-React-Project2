import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
      componentDidMount() {
            const navbar = document.querySelector('.navbar');
            navbar.style.display = 'none';
      }

      componentWillUnmount() {
            const navbar = document.querySelector('.navbar');
            navbar.style.display = 'block';
      }

      handleClick = e => {
            e.preventDefault();

            const { dispatch } = this.props;
            const id = e.target.id;

            dispatch(setAuthedUser(id));
            this.props.history.goBack();
      };

      render() {
            const { users } = this.props;

            return (
                  <div className="container">
                        <div
                              className="row justify-content-center"
                              style={{ marginTop: 100 + 'px' }}
                        >
                              <h3>Sign in:</h3>
                        </div>
                        <div className="row justify-content-center mt-3">
                              <div
                                    className="list-group "
                                    style={{ width: 22 + 'rem' }}
                              >
                                    {users.map(user => (
                                          <a
                                                href="/"
                                                className="list-group-item list-group-item-action"
                                                key={user.id}
                                                id={user.id}
                                                onClick={this.handleClick}
                                          >
                                                {user.name}
                                          </a>
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

export default connect(mapStateToProps)(Login);
