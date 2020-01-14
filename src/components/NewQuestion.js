import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
      state = {
            optionOne: '',
            optionTwo: '',
            toHome: false
      };

      componentDidMount() {
            if (this.props.authedUser === null) {
                  this.props.history.push(`/login`);
            }
      }

      handleChange = (e, option) => {
            var optionText = e.target.value;

            if (option === 'optionOne') {
                  this.setState(() => ({
                        optionOne: optionText
                  }));
            } else if (option === 'optionTwo') {
                  this.setState(() => ({
                        optionTwo: optionText
                  }));
            }
      };
      handleSubmit = e => {
            e.preventDefault();

            const { optionOne, optionTwo } = this.state;
            const { dispatch, authedUser } = this.props;

            dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));

            this.props.history.push(`/`);
      };
      render() {
            const OPTION_ONE = 'optionOne';
            const OPTION_TWO = 'optionTwo';

            return (
                  <div className="container">
                        <div
                              className="card col-centered mt-5"
                              style={{ maxWidth: 740 + 'px' }}
                        >
                              <div className="card-body">
                                    <h4 className="center">
                                          Would you rather..
                                    </h4>
                                    <p>Add your possible answer below.</p>

                                    <form onSubmit={this.handleSubmit}>
                                          <div className="form-group">
                                                <label
                                                      className="font-weight-bold"
                                                      htmlFor="formGroupExampleInput"
                                                >
                                                      Option one:
                                                </label>
                                                <input
                                                      type="text"
                                                      className="form-control"
                                                      id="formGroupExampleInput"
                                                      placeholder="Example: Becoming Jeff Bezos"
                                                      maxLength={100}
                                                      onChange={e =>
                                                            this.handleChange(
                                                                  e,
                                                                  OPTION_ONE
                                                            )
                                                      }
                                                />
                                          </div>
                                          <h5 className="mt-2 text-center">
                                                Or
                                          </h5>
                                          <div className="form-group">
                                                <label
                                                      className="font-weight-bold"
                                                      htmlFor="formGroupExampleInput2"
                                                >
                                                      Option two:
                                                </label>
                                                <input
                                                      type="text"
                                                      className="form-control"
                                                      id="formGroupExampleInput2"
                                                      placeholder="Example: Becoming Elon Musk"
                                                      maxLength={100}
                                                      onChange={e =>
                                                            this.handleChange(
                                                                  e,
                                                                  OPTION_TWO
                                                            )
                                                      }
                                                />
                                          </div>
                                          <button
                                                className="btn btn-primary"
                                                type="submit"
                                                disabled={
                                                      this.state.optionOne ===
                                                            '' ||
                                                      this.state.optionTwo ===
                                                            ''
                                                }
                                          >
                                                Submit
                                          </button>
                                    </form>
                              </div>
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

export default connect(mapStateToProps)(NewQuestion);
