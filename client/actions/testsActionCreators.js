import axios from 'axios';
import {
  testsDescriptionsAreLoaded,
  testPreviewInformationIsLoaded,
  testQuestionsAreLoaded,
  testAnswersAreChecked
} from '../constants/constants';

export const loadTestsDescriptions = () => dispatch => {
  axios.get('/api/descriptions')
    .then(
      result => dispatch({
        type: testsDescriptionsAreLoaded,
        testsDescriptions: result.data,
      })
    ).catch(
      //REDIRECT TO ERROR PAGE
    );
};

export const loadTestPreview = id => dispatch => {
  axios.get(`/api/preview-info/${id}`)
    .then(
      result => dispatch({
        type: testPreviewInformationIsLoaded,
        testPreviewInfo: result.data,
      })
    )
    .catch(
      //REDIRECT TO ERROR PAGE
    );
};

export const loadTestQuestions = id => dispatch => {
  axios.get(`/api/questions/${id}`)
    .then(
      result => dispatch({
        type: testQuestionsAreLoaded,
        testQuestions: result.data,
      })
    )
    .catch(
      //REDIRECT TO ERROR PAGE
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
