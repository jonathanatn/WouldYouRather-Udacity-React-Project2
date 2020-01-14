import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnsweredCard extends Component {
      state = {
            choice: ''
      };

      componentDidMount() {
            const { user, id } = this.props;
            const answers = user.answers[id];
            this.setState({
                  choice: answers
            });
      }

      render() {
            const { question, user } = this.props;

            const numOfOptionOneAnswer = this.props.question.optionOne.votes
                  .length;
            const numOfOptionTwoAnswer = this.props.question.optionTwo.votes
                  .length;
            const totalOfAnswer = numOfOptionOneAnswer + numOfOptionTwoAnswer;

            return (
                  <div
                        className="card"
                        style={{ width: 22 + 'rem', marginTop: 5 + 'px' }}
                  >
                        <div className="card-header ">
                              <div className="row align-items-center">
                                    <div className="col-2">
                                          <div
                                                style={{
                                                      width: 40 + 'px',
                                                      height: 40 + 'px',
                                                      borderRadius: 50 + '%',
                                                      backgroundImage:
                                                            'url("' +
                                                            user.avatarURL +
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
                                                {question && user.name} asked:
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <div className="card-body  text-center">
                              <h3 className="card-title  mb-4">
                                    WOULD YOU RATHER
                              </h3>
                              <button
                                    href="/"
                                    disabled
                                    className={
                                          this.state.choice === 'optionOne'
                                                ? 'btn btn-success btn-block'
                                                : 'btn btn-outline-secondary btn-block'
                                    }
                                    onClick={e => e.preventDefault()}
                              >
                                    {question && question.optionOne.text}
                              </button>
                              {this.state.choice === 'optionOne' ? (
                                    <div>
                                          <p>
                                                {numOfOptionOneAnswer} out of{' '}
                                                {totalOfAnswer} votes. (
                                                {Math.round(
                                                      (numOfOptionOneAnswer /
                                                            totalOfAnswer) *
                                                            100
                                                )}
                                                %)
                                          </p>
                                    </div>
                              ) : null}
                              <h5 className="mt-2">Or</h5>
                              <button
                                    href="/"
                                    disabled
                                    className={
                                          this.state.choice === 'optionTwo'
                                                ? 'btn btn-success btn-block'
                                                : 'btn btn-outline-secondary btn-block'
                                    }
                                    onClick={e => e.preventDefault()}
                              >
                                    {question && question.optionTwo.text}
                              </button>
                              {this.state.choice === 'optionTwo' ? (
                                    <div>
                                          <p>
                                                {numOfOptionTwoAnswer} out of{' '}
                                                {totalOfAnswer} votes. (
                                                {Math.round(
                                                      (numOfOptionTwoAnswer /
                                                            totalOfAnswer) *
                                                            100
                                                )}
                                                %)
                                          </p>
                                    </div>
                              ) : null}
                        </div>
                  </div>
            );
      }
}

function mapStateToProps({ questions, authedUser, users }, { id }) {
      const question = questions[id];

      const user = users[question.author];

      return {
            question,
            authedUser,
            users,
            user
      };
}

export default connect(mapStateToProps)(AnsweredCard);
