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

const goToNextQuestion = (testAnswers, history, id, dispatch) => {
  const nextAnswerInfo = testAnswers
    .find(answer => !answer.answer && answer.id !== id);
  return nextAnswerInfo ?
    dispatch({type: changeQuestionId, newId: nextAnswerInfo.id}) :
    history.push('/test-result');
};

export const answerTheQuestion = (
    currentQuestionId,
    answer,
    testId,
    testAnswers,
    history
  ) =>
  dispatch => {
    dispatch({
      type: answerTheQuestionConstant,
      currentQuestionId,
      answer
    });
    goToNextQuestion(testAnswers, history, changeQuestionId, dispatch);
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

export const skipTheQuestion = (id, testAnswers) => dispatch => {
  dispatch({
    type: skipTheQuestionConstant,
    id,
  });
  const nextAnswerInfo = testAnswers
    .find(answer => !answer.answer && answer.id !== id);
  dispatch({
    type: changeQuestionId,
    newId: nextAnswerInfo.id,
  });
};
