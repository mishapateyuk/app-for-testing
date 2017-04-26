import React from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {connect} from 'react-redux';
import Markdown from './Markdown.react';

const mapStateToProps = ({testsInfo, userInfo}) => ({
  questions: testsInfo.testQuestions,
  questionIndex: userInfo.questionIndex,
});

const QuestionText = ({questions, questionIndex}) =>
  <Markdown
    className="question-text"
    html={questions[questionIndex].text}
  />;

export default connect(mapStateToProps, null)(QuestionText);
