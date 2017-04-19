import {testsDescriptionsAreLoaded} from '../constants/constants';

const testsReducer = (
    state = {
      testsDescriptions: null,
      testPreviewInfo: null,
    },
    action
  ) => {
    switch (action.type) {
      case 'TESTS_DESCRIPTIONS_ARE_LOADED' :
        return Object.assign(
          {},
          state,
          {
            testsDescriptions: action.testsDescriptions,
          }
        );
      case 'TEST_PREVIEW_INFORMATION_IS_LOADED' :
        return Object.assign(
          {},
          state,
          {
            testPreviewInfo: action.testPreviewInfo,
          }
        );
        case 'CLEAR_TEST_PREVIEW_INFO' :
          return Object.assign(
            {},
            state,
            {
              testPreviewInfo: null,
            }
          );
      default :
        return state;
  };
};

export default testsReducer;
