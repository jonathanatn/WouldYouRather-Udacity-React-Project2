import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCard from './card/QuestionCard';

class Questions extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  showUnanswered: true
            };
      }

      componentDidMount() {
            if (this.props.authedUser === null) {
                  this.props.history.push(`/login`);
            }
      }

      showUnanswered = event => {
            event.preventDefault();
            this.setState({
                  showUnanswered: true
            });
      };
      showAnswered = event => {
            event.preventDefault();
            this.setState({
                  showUnanswered: false
            });
      };

      render() {
            //Recover user property
            const authedUser = this.props.users.filter(
                  user => user.id === this.props.authedUser
            );

            //Recover answered question by the user
            const authedUserAnswered =
                  authedUser[0] && Object.keys(authedUser[0].answers);

            const unanswered = this.props.questions.filter(
                  question =>
                        authedUser[0] && !authedUserAnswered.includes(question)
            );

            const answered = this.props.questions.filter(
                  question =>
                        authedUser[0] && authedUserAnswered.includes(question)
            );

            return (
                  <div>
                        <div className="row justify-content-center">
                              <div className="btn-group mt-5 mb-3" role="group">
                                    <button
                                          type="button"
                                          // className="btn btn-primary"
                                          className={
                                                this.state.showUnanswered ===
                                                true
                                                      ? 'btn btn-primary'
                                                      : 'btn btn-outline-secondary'
                                          }
                                          onClick={this.showUnanswered}
                                    >
                                          Unanswered
                                    </button>
                                    <button
                                          type="button"
                                          className={
                                                this.state.showUnanswered ===
                                                false
                                                      ? 'btn btn-primary'
                                                      : 'btn btn-outline-secondary'
                                          }
                                          onClick={this.showAnswered}
                                    >
                                          Answered
                                    </button>
                              </div>
                        </div>

                        <div className="row justify-content-center">
                              <ul
                                    className="unanswered-list"
                                    style={
                                          this.state.showUnanswered === true
                                                ? { display: 'block' }
                                                : { display: 'none' }
                                    }
                              >
                                    {unanswered.map(id => (
                                          <QuestionCard key={id} id={id} />
                                    ))}
                              </ul>
                              <ul
                                    className="answered-list"
                                    style={
                                          this.state.showUnanswered === true
                                                ? { display: 'none' }
                                                : { display: 'block' }
                                    }
                              >
                                    {answered.map(id => (
                                          <QuestionCard key={id} id={id} />
                                    ))}
                              </ul>
                        </div>
                  </div>
            );
      }
}

function mapStateToProps({ questions, authedUser, users }) {
      let questionsSorted = Object.values(questions);

      questionsSorted = questionsSorted.sort(
            (a, b) => b.timestamp - a.timestamp
      );

      return {
            questions: questionsSorted.map(question => question.id),
            authedUser,
            users: Object.values(users)
      };
}

export default connect(mapStateToProps)(Questions);
