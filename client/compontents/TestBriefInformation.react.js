import React from 'react';
import Glyphicon from './Glyphicon.react';
import Stars from './Stars.react';
import PropTypes from 'prop-types';

const TestBriefInformation = ({time, questionsCount, level, stars}) =>
  <div className="col-lg-4">
    <h2>Brief iformation:</h2>
    <p><Glyphicon type="time" />{time}</p>
    <p title="Questions count">
      <Glyphicon type="list-alt" />{questionsCount} questions
    </p>
    <p><Glyphicon type="education" />{level}</p>
    <p>{<Stars number={stars}/>}</p>
  </div>;

TestBriefInformation.propTypes = {
  time: PropTypes.string.isRequired,
  questionsCount: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
};

export default TestBriefInformation;
