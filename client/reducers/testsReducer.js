const testsReducer = (
    state = {
      testsDescriptions: null,
      testPreviewInfo: null,
      testQuestions: null,
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
          case 'CLEAR_TEST_QUESTIONS' :
          return Object.assign(
            {},
            state,
            {
              testQuestions: null,
            }
          );
      default :
        return state;
  };
};

export default testsReducer;
