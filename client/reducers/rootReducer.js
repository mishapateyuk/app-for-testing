import {combineReducers} from 'redux';

const initialReducer = (state={}, action) => {
  return state;
};

const rootReducer = combineReducers({
  initial: initialReducer,
});

export default rootReducer;
