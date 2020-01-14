import {
      _getUsers,
      _getQuestions,
      _saveQuestion,
      _saveQuestionAnswer
} from './_DATA.js';

export function getInitialData() {
      return Promise.all([_getUsers(), _getQuestions()]).then(
            ([users, questions]) => ({
                  users,
                  questions
            })
      );
}

export function saveQuestion(info) {
      // console.log('in api/savequestion: ', info);
      return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
      // setTimeout(() => {
      //       console.log('in API: ', info);
      // }, 1000);
      return _saveQuestionAnswer(info);
}
