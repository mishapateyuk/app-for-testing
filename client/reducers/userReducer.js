const userReducer = (
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
      default :
        return state;
  };
};

export default userReducer;
