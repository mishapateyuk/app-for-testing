import {testsDescriptionsAreLoaded} from '../constants/constants';

const testsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TESTS_DESCRIPTIONS_ARE_LOADED' :
      return Object.assign(
        {},
        state,
        {
          testsDescriptions: action.testsDescriptions,
        }
      );
    case 'TESTS_PREVIEW_INFORMATION_IS_LOADED' :
      return Object.assign(
        {},
        state,
        {
          testPreviewInfo: action.testPreviewInfo,
        }
      );
    default :
      return state;
  };
};

export default testsReducer;
