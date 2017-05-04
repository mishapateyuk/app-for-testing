const userInfo = (
    state = {
      userName: null,
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
      case 'CLEAR_USERNAME' :
        return Object.assign(
          {},
          state,
          {
            userName: null,
          }
        );
      default :
        return state;
  };
};

export default userInfo;
