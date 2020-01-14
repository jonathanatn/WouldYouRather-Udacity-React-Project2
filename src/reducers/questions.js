import {
      RECEIVE_QUESTIONS,
      ANSWER_QUESTION,
      ADD_QUESTION
} from '../actions/questions';

export default function questions(state = {}, action) {
      switch (action.type) {
            case RECEIVE_QUESTIONS:
                  return {
                        ...state,
                        ...action.questions
                  };
            case ADD_QUESTION:
                  //I only add the question in question: in the store not in user
                  return {
                        ...state,
                        [action.question.id]: action.question
                  };
            case ANSWER_QUESTION:
                  let optionOne = {};
                  let optionTwo = {};
                  if (action.answer === 'optionOne') {
                        optionOne = {
                              ...state[action.qid].optionOne,
                              votes: state[action.qid].optionOne.votes.concat([
                                    action.authedUser
                              ])
                        };
                        optionTwo = {
                              ...state[action.qid].optionTwo
                        };
                  } else if (action.answer === 'optionTwo') {
                        optionOne = {
                              ...state[action.qid].optionOne
                        };
                        optionTwo = {
                              ...state[action.qid].optionTwo,
                              votes: state[action.qid].optionTwo.votes.concat([
                                    action.authedUser
                              ])
                        };
                  }
                  return {
                        ...state,
                        [action.qid]: {
                              ...state[action.qid],
                              optionOne,
                              optionTwo
                              // optionOne: {
                              //       ...state[action.qid].optionOne,
                              //       votes: state[
                              //             action.qid
                              //       ].optionOne.votes.concat([
                              //             action.authedUser
                              //       ])
                              // }
                        }
                  };
            default:
                  return state;
      }
}
