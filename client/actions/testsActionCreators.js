import axios from 'axios';
import {
  testsDescriptionsAreLoaded,
  testPreviewInfoIsLoaded,
  testQuestionsAreLoaded,
  testAnswersAreChecked,
  changeQuestionId
} from '../constants/constants';

export const loadTestsDescriptions = () => dispatch => {
  axios.get('/api/descriptions')
    .then(
      result => dispatch({
        type: testsDescriptionsAreLoaded,
        testsDescriptions: result.data,
      })
    );
};

export const loadTestPreview = id => dispatch => {
  axios.get(`/api/preview-info/${id}`)
    .then(
      result => dispatch({
        type: testPreviewInfoIsLoaded,
        testPreviewInfo: result.data,
      })
    );
};

export const loadTestQuestions = id => dispatch => {
  axios.get(`/api/questions/${id}`)
    .then(
      result => dispatch({
        type: testQuestionsAreLoaded,
        testQuestions: result.data,
      })
    );
};

export const checkAnswers = (answers, id, userName) => dispatch => {
  axios.post('/api/check-answers', {answers, id, userName})
    .then(
      result => dispatch({
        type: testAnswersAreChecked,
        testResult: result.data,
      })
    );
};

export const answerTheQuestion = (answer, id) => dispatch => {
  axios.post('/api/check-question-answer', {answer, id})
    .then(
      result => dispatch({
        type: testAnswersAreChecked,
        testResult: result.data,
      })
    );
};

export const goToNextQuestion = () => dispatch => {

  const newId = 0;

  dispatch({
  type: changeQuestionId,
  newId,
  });
};
