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
      case 'ANSWER_THE_QUESTION' : {
        const testAnswers = [...state.testAnswers];
          testAnswers.find(answer => answer.id === action.currentQuestionId)
            .answer = action.answer;
          return Object.assign(
            {},
            state,
            {
              testAnswers,
            }
          );
      };
      case 'SKIP_THE_QUESTION' : {
        debugger;
          const testAnswers = [...state.testAnswers];
          const i = testAnswers.indexOf(
            testAnswers.find(answer => answer.id === action.id)
          );
          testAnswers.push(testAnswers.splice(i, 1)[0]);
          return Object.assign(
            {},
            state,
            {
              testAnswers,
            }
          );
      };
      case 'SET_ANSWER_RESULT' : {
        const testAnswers = [...state.testAnswers];
        testAnswers.find(answer => answer.id === action.currentQuestionId)
          .result = action.result;
        return Object.assign(
          {},
          state,
          {
            testAnswers,
          }
        );
      };
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
