import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const initialReducer = (state = {}, action) => {
  return state;
};

const rootReducer = combineReducers({
  initial: initialReducer,
  router: routerReducer
});

export default rootReducer;
