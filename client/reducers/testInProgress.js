const testInProgress = (
    state = {
      testInitialTime: null,
      questionId: null,
      currentTestId: null,
      testAnswers: null,
      testResult: null,
    },
    action
  ) => {
    switch (action.type) {
      case 'START_TEST' :
        return Object.assign(
          {},
          state,
          {
            testInitialTime: action.initialTime,
            currentTestId: action.currentTestId,
            testAnswers: action.testAnswers,
          }
        );
      case 'CLEAR_CURRENT_TEST_INFO' :
        return Object.assign(
          {},
          state,
          {
            testInitialTime: null,
            questionId: null,
          }
        );
      case 'CHANGE_QUESTION_ID' :
        return Object.assign(
          {},
          state,
          {
            questionId: action.newId,
          }
        );
      case 'ANSWER_THE_QUESTION' :
        return Object.assign(
          {},
          state,
          {
            testAnswers: state.testAnswers.concat(action.answer),
          }
        );
      case 'CLEAR_TEST_ANSWERS' :
        return Object.assign(
          {},
          state,
          {
            testAnswers: null,
          }
        );
      case 'TEST_ANSWERS_ARE_CHECKED' :
        return Object.assign(
          {},
          state,
          {
            testResult: action.testResult,
          }
        );
      case 'SET_INITIAL_QUESTION_ID' :
        return Object.assign(
          {},
          state,
          {
            questionId: action.id,
          }
        );
      default :
        return state;
    };
};

export default testInProgress;
