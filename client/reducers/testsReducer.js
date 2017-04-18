import {testsDescriptionsAreLoaded} from '../constants/constants';

const testsReducer = (state = null, action) => {
  switch (action.type) {
    case 'TESTS_DESCRIPTIONS_ARE_LOADED' :
      return action.testsDescriptions;
    default :
      return state;
  };
};

export default testsReducer;
