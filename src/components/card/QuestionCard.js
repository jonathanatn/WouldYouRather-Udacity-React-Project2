import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionCard extends Component {
      render() {
            const { question, id, author } = this.props;
            return (
                  <div
                        className="card"
                        style={{ width: 500 + 'px', marginTop: 5 + 'px' }}
                  >
                        <div className="card-header">
                              {' '}
                              <div className="row align-items-center">
                                    <div
                                          className="col-1"
                                          style={{ marginRight: 12 + 'px' }}
                                    >
                                          <div
                                                style={{
                                                      width: 40 + 'px',
                                                      height: 40 + 'px',
                                                      borderRadius: 50 + '%',
                                                      backgroundImage:
                                                            'url("' +
                                                            author.avatarURL +
                                                            '")',
                                                      backgroundSize: 'cover',
                                                      backgroundRepeat:
                                                            'no-repeat',
                                                      backgroundPosition:
                                                            'center'
                                                }}
                                          />
                                    </div>
                                    <div className="col-10">
                                          <p style={{ marginBottom: 0 }}>
                                                {question && author.name} asked:
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="card-body">
                              <div className="row">
                                    <div className="col-12">
                                          <h5 className="text-center">
                                                Would you rather..
                                          </h5>
                                          <p className="text-center">
                                                ...
                                                {JSON.parse(
                                                      JSON.stringify(
                                                            question.optionOne
                                                                  .text
                                                      )
                                                ).substring(0, 20)}
                                                ...
                                          </p>
                                          <Link
                                                to={`/questions/${id}`}
                                                className="btn btn-outline-primary btn-block"
                                          >
                                                View Poll
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      }
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
      const question = questions[id];

      const author = users[question.author];

      return {
            questions,
            authedUser,
            users,
            question,
            author
      };
}

export default connect(mapStateToProps)(QuestionCard);
