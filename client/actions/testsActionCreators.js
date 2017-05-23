import axios from 'axios';
import {
  TESTS_DESCRIPTIONS_ARE_LOADED,
  TEST_PREVIEW_INFO_IS_LOADED,
  TEST_QUESTIONS_ARE_LOADED,
  TEST_ANSWERS_ARE_CHECKED,
  CHANGE_QUESTION_ID,
  ANSWER_THE_QUESTION,
  SKIP_THE_QUESTION,
  SET_ANSWER_RESULT
} from '../constants/constants';

export const loadTestsDescriptions = () => dispatch => {
  axios.get('/api/descriptions')
    .then(
      ({data}) => dispatch({
        type: TESTS_DESCRIPTIONS_ARE_LOADED,
        testsDescriptions: data,
      })
    );
};

export const loadTestPreview = id => dispatch => {
  axios.get(`/api/preview-info/${id}`)
    .then(
      ({data}) => dispatch({
        type: TEST_PREVIEW_INFO_IS_LOADED,
        testPreviewInfo: data,
      })
    );
};

export const loadTestQuestions = id => dispatch => {
  axios.get(`/api/questions/${id}`)
    .then(
      ({data}) => dispatch({
        type: TEST_QUESTIONS_ARE_LOADED,
        testQuestions: data,
      })
    );
};

export const checkAnswers = (answers, id, userName) => dispatch => {
  axios.post('/api/check-answers', {answers, id, userName})
    .then(
      ({data}) => dispatch({
        type: TEST_ANSWERS_ARE_CHECKED,
        testResult: data,
      })
    );
};

const goToNextQuestion = (testAnswers, history, questionId, dispatch) => {
  const nextAnswerInfo = testAnswers
    .find(({answer, id}) => !answer && id !== questionId);
  return nextAnswerInfo ?
    dispatch({type: CHANGE_QUESTION_ID, newId: nextAnswerInfo.id}) :
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
      type: ANSWER_THE_QUESTION,
      currentQuestionId,
      answer
    });
    goToNextQuestion(testAnswers, history, currentQuestionId, dispatch);
    axios.post(
      '/api/check-question-answer',
      {currentQuestionId, answer, testId}
    )
      .then(
        ({data}) => dispatch({
          type: SET_ANSWER_RESULT,
          currentQuestionId,
          result: data,
        })
      );
  };

export const skipTheQuestion = (questionId, testAnswers) => dispatch => {
  dispatch({
    type: SKIP_THE_QUESTION,
    id: questionId,
  });
  const nextAnswerInfo = testAnswers
    .find(({answer, id}) => !answer && id !== questionId);
  dispatch({
    type: CHANGE_QUESTION_ID,
    newId: nextAnswerInfo.id,
  });
};
