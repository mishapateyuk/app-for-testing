const userReducer = (
    state = {
      userName: null,
      testInitialTime: null,
      questionIndex: 0,
    },
    action
  ) => {
    switch (action.type) {
      case 'SET_USERNAME' :
        return Object.assign(
          {},
          state,
          {
            userName: action.userName,
          }
        );
      case 'START_TEST' :
        return Object.assign(
          {},
          state,
          {
            testInitialTime: action.initialTime,
          }
        );
      case 'TEST_TIME_OVER' :
        return {
          userName: null,
          testInitialTime: null,
          questionIndex: 0,
        };
      case 'CHANGE_QUESTION_INDEX' :
        return Object.assign(
          {},
          state,
          {
            questionIndex: action.newIndex,
          }
        );
      default :
        return state;
  };
};

export default userReducer;
