import React from 'react';
import PropTypes from 'prop-types';
import uuidV4Js from 'uuid-v4.js';

const TestTopics = ({testTopics}) =>
  <div className="col-lg-4">
    <h2>Test topics:</h2>
    <ul>
      {
        testTopics.map(
          topic => <li key={uuidV4Js()}>{topic}</li>
        )
      }
    </ul>
  </div>;

TestTopics.propTypes = {
  testTopics: PropTypes.array.isRequired,
};

export default TestTopics;
