import axios from 'axios';
import {testsDescriptionsAreLoaded} from '../constants/constants';

export const loadTestsDescriptions = () => dispatch => {
  axios.get('/api/get-tests-descriptions')
    .then((result) => dispatch({
      type: testsDescriptionsAreLoaded,
      testsDescriptions: result.data,
    })
  );
};

