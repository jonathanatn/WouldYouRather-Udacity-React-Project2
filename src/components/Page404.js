import React, { Component } from 'react';
import { connect } from 'react-redux';

class Page404 extends Component {
      componentDidMount() {
            if (this.props.authedUser === null) {
                  this.props.history.push(`/login`);
            }
      }
      render() {
            return (
                  <div className="container">
                        <div
                              className="row justify-content-center"
                              style={{ marginTop: 100 + 'px' }}
                        >
                              <h3>Error 404: The page does not exist.</h3>
                        </div>
                  </div>
            );
      }
}

function mapStateToProps({ authedUser }) {
      return {
            authedUser
      };
}

export default connect(mapStateToProps)(Page404);
