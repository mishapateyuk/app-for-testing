import React from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {connect} from 'react-redux';
import uuidV4Js from 'uuid-v4.js';
import Markdown from './Markdown.react';

const mapStateToProps = ({testsInfo, userInfo}) => ({
  questions: testsInfo.testQuestions,
  questionIndex: userInfo.questionIndex,
});

const Answers = ({questions, questionIndex}) =>
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
    <button className="btn btn-lg btn-success" onClick={() => null}>
      Answer &#8658;
    </button>
  </form>;

export default connect(mapStateToProps, null)(Answers);
