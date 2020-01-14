import { RECEIVE_USERS, ADD_ANSWER, ADD_QUESTION_USER } from '../actions/users';

export default function users(state = {}, action) {
      switch (action.type) {
            case RECEIVE_USERS:
                  return {
                        ...state,
                        ...action.users
                  };

            case ADD_ANSWER:
                  return {
                        ...state,
                        [action.info.authedUser]: {
                              ...state[action.info.authedUser],
                              answers: {
                                    ...state[action.info.authedUser].answers,
                                    [action.info.qid]: action.info.answer
                              }
                        }
                  };

            case ADD_QUESTION_USER:
                  return {
                        ...state,
                        [action.info.author]: {
                              ...state[action.info.author],
                              questions: state[
                                    action.info.author
                              ].questions.concat(action.info.id)
                        }
                  };
            default:
                  return state;
      }
}
