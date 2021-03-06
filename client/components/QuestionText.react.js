import React from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {connect} from 'react-redux';
import Markdown from './Markdown.react';

const mapStateToProps = ({testsInfo, testInProgress}) => ({
  questions: testsInfo.testQuestions,
  currentQuestionId: testInProgress.currentQuestionId,
});

const QuestionText = ({questions, currentQuestionId, text}) =>
  (currentQuestionId === null && !text) ?
    <div /> :
    <Markdown
      className="question-text"
      html={
        text ||
        questions.find(question => question.id === currentQuestionId).text
      }
    />;

QuestionText.propTypes = {
  questions: PropTypes.array.isRequired,
  currentQuestionId: PropTypes.string,
};

export default connect(mapStateToProps, null)(QuestionText);
