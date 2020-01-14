import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnansweredCard from './card/UnansweredCard';
import AnsweredCard from './card/AnsweredCard';

class QuestionCard extends Component {
      componentDidMount() {
            if (this.props.authedUser === null) {
                  this.props.history.push(`/login`);
            }

            if (this.props.user) {
                  const questionsId = Object.keys(this.props.questions);
                  let isEqual = false;
                  for (let i = 0; i < questionsId.length; i++) {
                        if (questionsId[i] === this.props.match.params.id) {
                              isEqual = true;
                        }
                  }
                  if (!isEqual) {
                        this.props.history.push(`/Page404`);
                  }
            }
      }
      render() {
            const { user } = this.props;
            const didUserAnswersed =
                  user &&
                  Object.keys(user.answers).includes(
                        this.props.match.params.id
                  );

            if (!didUserAnswersed) {
                  return (
                        <div className="container">
                              <div
                                    className="row justify-content-center"
                                    style={{ marginTop: 50 + 'px' }}
                              >
                                    <UnansweredCard
                                          key={this.props.match.params.id}
                                          id={this.props.match.params.id}
                                    />
                              </div>
                        </div>
                  );
            } else {
                  return (
                        <div className="container">
                              <div
                                    className="row justify-content-center"
                                    style={{ marginTop: 50 + 'px' }}
                              >
                                    <AnsweredCard
                                          key={this.props.match.params.id}
                                          id={this.props.match.params.id}
                                    />
                              </div>
                        </div>
                  );
            }
      }
}

function mapStateToProps({ questions, authedUser, users }) {
      const user = users[authedUser];

      return {
            questions,
            authedUser,
            users,
            user
      };
}

export default connect(mapStateToProps)(QuestionCard);
