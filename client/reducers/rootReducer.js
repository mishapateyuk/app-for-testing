import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import testsReducer from './testsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  testsInfo: testsReducer,
  userInfo: userReducer,
  router: routerReducer,
});

export default rootReducer;
