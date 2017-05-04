import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import testsInfo from './testsInfo';
import testInProgress from './testInProgress';
import userInfo from './userInfo';

const rootReducer = combineReducers({
  testsInfo,
  userInfo,
  testInProgress,
  router: routerReducer,
});

export default rootReducer;
