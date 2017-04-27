import React from 'react';
import PropTypes from 'prop-types';
import uuidV4Js from 'uuid-v4.js';
import Glyphicon from './Glyphicon.react';

const TestTopUsers = ({topUsers, questionsCount}) =>
  <div className="col-lg-4">
    <h2>Top scores:</h2>
    <ul className="list-group">
      {topUsers.map(
        ({name, score}) =>
        <li className="list-group-item" key={uuidV4Js()}>
          <span className="badge">{score}/{questionsCount}</span>
          <Glyphicon type="user" /> {name}
        </li>
      )}
    </ul>
  </div>;

TestTopUsers.propTypes = {
  topUsers: PropTypes.array.isRequired,
  questionsCount: PropTypes.string.isRequired,
};

export default TestTopUsers;
