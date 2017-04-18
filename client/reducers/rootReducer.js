import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import testsReducer from './testsReducer';

const rootReducer = combineReducers({
  testsInfo: testsReducer,
  router: routerReducer,
});

export default rootReducer;
