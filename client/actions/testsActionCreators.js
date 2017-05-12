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
      ({data}) => dispatch({
        type: testsDescriptionsAreLoaded,
        testsDescriptions: data,
      })
    );
};

export const loadTestPreview = id => dispatch => {
  axios.get(`/api/preview-info/${id}`)
    .then(
      ({data}) => dispatch({
        type: testPreviewInfoIsLoaded,
        testPreviewInfo: data,
      })
    );
};

export const loadTestQuestions = id => dispatch => {
  axios.get(`/api/questions/${id}`)
    .then(
      ({data}) => dispatch({
        type: testQuestionsAreLoaded,
        testQuestions: data,
      })
    );
};

export const checkAnswers = (answers, id, userName) => dispatch => {
  axios.post('/api/check-answers', {answers, id, userName})
    .then(
      ({data}) => dispatch({
        type: testAnswersAreChecked,
        testResult: data,
      })
    );
};

const goToNextQuestion = (testAnswers, history, questionId, dispatch) => {
  const nextAnswerInfo = testAnswers
    .find(({answer, id}) => !answer && id !== questionId);
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
  ) => dispatch => {
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
        ({data}) => dispatch({
          type: setAnswerResult,
          currentQuestionId,
          result: data,
        })
      );
  };

export const skipTheQuestion = (questionId, testAnswers) => dispatch => {
  dispatch({
    type: skipTheQuestionConstant,
    id: questionId,
  });
  const nextAnswerInfo = testAnswers
    .find(({answer, id}) => !answer && id !== questionId);
  dispatch({
    type: changeQuestionId,
    newId: nextAnswerInfo.id,
  });
};
