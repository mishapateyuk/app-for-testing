const testInProgress = (
    state = {
      testInitialTime: null,
      currentQuestionId: null,
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
      case 'SKIP_THE_QUESTION' :
        const withSkipped = [...state.testAnswers];
        const i = withSkipped.indexOf(
          withSkipped.find(answer => answer.id === action.id)
        );
        withSkipped.push(withSkipped.splice(i, 1)[0]);
        return Object.assign(
          {},
          state,
          {
            testAnswers: withSkipped,
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
