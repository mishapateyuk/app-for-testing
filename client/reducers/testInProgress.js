const testInProgress = (
    state = {
      testInitialTime: null,
      currentQuestionId: null,
      currentTestId: null,
      testAnswers: null,
      testResult: null,
      skipped: [],
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
            skipped: [],
          }
        );
      case 'CLEAR_CURRENT_TEST_INFO' :
        return Object.assign(
          {},
          state,
          {
            testInitialTime: null,
            currentQuestionId: null,
          }
        );
      case 'CHANGE_QUESTION_ID' :
        return Object.assign(
          {},
          state,
          {
            currentQuestionId: action.newId,
          }
        );
      case 'ANSWER_THE_QUESTION' :
        const withAnswer = [...state.testAnswers];
        withAnswer.find(answer => answer.id === action.currentQuestionId)
          .answer = action.answer;
        return Object.assign(
          {},
          state,
          {
            testAnswers: withAnswer,
          }
        );
      case 'SET_ANSWER_RESULT' :
        const withResult = [...state.testAnswers];
        withResult.find(answer => answer.id === action.currentQuestionId)
          .result = action.result;
        return Object.assign(
          {},
          state,
          {
            testAnswers: withResult,
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
            currentQuestionId: action.id,
          }
        );
      default :
        return state;
    };
};

export default testInProgress;
