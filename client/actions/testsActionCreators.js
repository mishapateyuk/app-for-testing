import axios from 'axios';
import {
    testsDescriptionsAreLoaded,
    testPreviewInformationIsLoaded
  } from '../constants/constants';

export const loadTestsDescriptions = () => dispatch => {
  axios.get('/api/get-tests-descriptions')
    .then(
      (result) => dispatch({
        type: testsDescriptionsAreLoaded,
        testsDescriptions: result.data,
      })
    );
};

export const loadTestPreview = (id) => dispatch => {
  axios.get('/api/get-test-preview-info')
    .then(
      (result) => dispatch({
        type: testPreviewInformationIsLoaded,
        testPreviewInfo: result.data,
      })
    );
};
