import React from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {connect} from 'react-redux';
import uuidV4Js from 'uuid-v4.js';
import Markdown from './Markdown.react';
import {changeQuestionIndex} from '../constants/constants';
import {withRouter} from 'react-router';

const mapStateToProps = ({testsInfo}) => ({
  questions: testsInfo.testQuestions,
  questionIndex: testsInfo.questionIndex,
});

const mapDispatchToProps = dispatch => ({
  goToNextQuestion: newIndex => dispatch({
    type: changeQuestionIndex,
    newIndex,
  }),
  endTest: () => dispatch(),
});

const buttonHandler = (goToNextQuestion, index, questionsCount, history) => (e) => {
  e.preventDefault();
  const nextQuestionIndex = Number(index) + 1;
  return nextQuestionIndex < questionsCount ?
    goToNextQuestion(nextQuestionIndex) :
    history.push('/test-result');
};

const Answers = ({questions, questionIndex, goToNextQuestion, history}) =>
  <form className="answers">
    {
      questions[questionIndex].answers.map(
        answer =>
          <div className={questions[questionIndex].type} key={uuidV4Js()}>
            <label>
              <input type={questions[questionIndex].type} name="answer" />
              <Markdown html={answer.text} key={uuidV4Js()} />
            </label>
          </div>
      )
    }
    <button
      className="btn btn-lg btn-success"
      onClick={
        buttonHandler(goToNextQuestion, questionIndex, questions.length, history)
      }
    >
      Answer &#8658;
    </button>
  </form>;

Answers.propTypes = {
  questions: PropTypes.array.isRequired,
  questionIndex: PropTypes.number.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
  endTest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Answers));
