import React from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {connect} from 'react-redux';
import Markdown from './Markdown.react';

const mapStateToProps = ({testsInfo, testInProgress}) => ({
  questions: testsInfo.testQuestions,
  questionId: testInProgress.questionId,
});

const QuestionText = ({questions, questionId}) =>
  questionId === null ?
    <div /> :
    <Markdown
      className="question-text"
      html={
        questions.find(question => question.id === questionId).text
      }
    />;

QuestionText.propTypes = {
  questions: PropTypes.array.isRequired,
  questionId: PropTypes.string,
};

export default connect(mapStateToProps, null)(QuestionText);
