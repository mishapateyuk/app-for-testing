import React from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {connect} from 'react-redux';
import Markdown from './Markdown.react';

const mapStateToProps = ({testsInfo}) => ({
  questions: testsInfo.testQuestions,
  questionIndex: testsInfo.questionIndex,
});

const QuestionText = ({questions, questionIndex}) =>
  <Markdown
    className="question-text"
    html={questions[questionIndex].text}
  />;

QuestionText.propTypes = {
  questions: PropTypes.array.isRequired,
  questionIndex: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(QuestionText);
