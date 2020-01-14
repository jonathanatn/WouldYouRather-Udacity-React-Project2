import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addAnswer, addQuestionUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
      return {
            type: RECEIVE_QUESTIONS,
            questions
      };
}

function addQuestion(question) {
      return {
            type: ADD_QUESTION,
            question
      };
}

export function handleAddQuestion(optionOne, optionTwo, authedUser) {
      return dispatch => {
            return saveQuestion({
                  optionOneText: optionOne,
                  optionTwoText: optionTwo,
                  author: authedUser
            }).then(question => {
                  dispatch(addQuestion(question));
                  dispatch(addQuestionUser(question));
            });
      };
}

function answerQuestion({ authedUser, qid, answer }) {
      return {
            type: ANSWER_QUESTION,
            authedUser,
            qid,
            answer
      };
}

export function handleAnswerQuestion(info) {
      return dispatch => {
            dispatch(answerQuestion(info));
            dispatch(addAnswer(info));

            return saveQuestionAnswer(info);
      };
}
