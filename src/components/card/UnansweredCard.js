import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../../actions/questions';

class UnansweredCard extends Component {
      handleAnswer = (e, answer) => {
            e.preventDefault();

            const { question, authedUser, dispatch } = this.props;

            dispatch(
                  handleAnswerQuestion({ authedUser, qid: question.id, answer })
            );
      };

      render() {
            const { question, user } = this.props;

            return (
                  <div
                        className="card"
                        style={{ width: 22 + 'rem', marginTop: 5 + 'px' }}
                  >
                        <div className="card-header">
                              <div className="row align-items-center">
                                    <div className="col-2">
                                          <div
                                                style={
                                                      user && {
                                                            width: 40 + 'px',
                                                            height: 40 + 'px',
                                                            borderRadius:
                                                                  50 + '%',
                                                            backgroundImage:
                                                                  'url("' +
                                                                  user.avatarURL +
                                                                  '")',
                                                            backgroundSize:
                                                                  'cover',
                                                            backgroundRepeat:
                                                                  'no-repeat',
                                                            backgroundPosition:
                                                                  'center'
                                                      }
                                                }
                                          />
                                    </div>
                                    <div className="col-10">
                                          <p style={{ marginBottom: 0 }}>
                                                {question && user.name} asked:
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="card-body  text-center">
                              <h3 className="card-title mb-4">
                                    WOULD YOU RATHER
                              </h3>
                              <a
                                    href="/"
                                    className="btn btn-primary btn-block"
                                    onClick={e =>
                                          this.handleAnswer(e, 'optionOne')
                                    }
                              >
                                    {question && question.optionOne.text}
                              </a>
                              <h5 className="mt-2">Or</h5>
                              <a
                                    href="/"
                                    className="btn btn-primary btn-block"
                                    onClick={e =>
                                          this.handleAnswer(e, 'optionTwo')
                                    }
                              >
                                    {question && question.optionTwo.text}
                              </a>
                        </div>
                  </div>
            );
      }
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
      const question = questions[id];

      const user = question ? users[question.author] : null;

      return {
            question,
            authedUser,
            users,
            user
      };
}

export default connect(mapStateToProps)(UnansweredCard);
