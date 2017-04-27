const testsReducer = (
    state = {
      testsDescriptions: null,
      testPreviewInfo: null,
      testQuestions: null,
      testInitialTime: null,
      questionIndex: 0,
      currentTestId: null,
      testAnswers: [],
    },
    action
  ) => {
    switch (action.type) {
      case 'TESTS_DESCRIPTIONS_ARE_LOADED' :
        return Object.assign(
          {},
          state,
          {
            testsDescriptions: action.testsDescriptions,
          }
        );
      case 'TEST_PREVIEW_INFORMATION_IS_LOADED' :
        return Object.assign(
          {},
          state,
          {
            testPreviewInfo: action.testPreviewInfo,
          }
        );
      case 'CLEAR_TEST_PREVIEW_INFO' :
        return Object.assign(
          {},
          state,
          {
            testPreviewInfo: null,
          }
        );
      case 'TEST_QUESTIONS_ARE_LOADED' :
        return Object.assign(
          {},
          state,
          {
            testQuestions: action.testQuestions,
          }
        );
      case 'START_TEST' :
        return Object.assign(
          {},
          state,
          {
            testInitialTime: action.initialTime,
            currentTestId: action.currentTestId,
          }
        );
      case 'CLEAR_CURRENT_TEST_INFO' :
        return Object.assign(
          {},
          state,
          {
            testInitialTime: null,
            questionIndex: 0,
            currentTestId: null,
            testQuestions: null,
            testAnswers: null,
          }
        );
      case 'CHANGE_QUESTION_INDEX' :
        return Object.assign(
          {},
          state,
          {
            questionIndex: action.newIndex,
          }
        );
      case 'ANSWER_THE_QUESTION' :
        return Object.assign(
          {},
          state,
          {
            testAnswers: state.testAnswers.concat(action.answer)
          }
        );
      default :
        return state;
  };
};

export default testsReducer;
