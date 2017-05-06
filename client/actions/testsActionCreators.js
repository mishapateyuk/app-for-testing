import axios from 'axios';
import {
  testsDescriptionsAreLoaded,
  testPreviewInfoIsLoaded,
  testQuestionsAreLoaded,
  testAnswersAreChecked,
  changeQuestionId,
  answerTheQuestion as answerTheQuestionConstant,
  skipTheQuestion as skipTheQuestionConstant,
  setAnswerResult
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

export const answerTheQuestion = (currentQuestionId, answer, testId) =>
  dispatch => {
    dispatch({
      type: answerTheQuestionConstant,
      currentQuestionId,
      answer
    });
    axios.post(
      '/api/check-question-answer',
      {currentQuestionId, answer, testId}
    )
      .then(
        result => dispatch({
          type: setAnswerResult,
          currentQuestionId,
          result: result.data,
        })
      );
  };

export const skipTheQuestion = id => dispatch => {
  dispatch({
    type: skipTheQuestionConstant,
    id,
  });
};

export const goToNextQuestion = (testAnswers, history) => dispatch => {
  const nextAnswerInfo = testAnswers.find(answer => !answer.answer);
  return nextAnswerInfo ?
    dispatch({type: changeQuestionId, newId: nextAnswerInfo.id}) :
    history.push('/test-result');
};
