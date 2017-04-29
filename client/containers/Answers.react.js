import React from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {connect} from 'react-redux';
import uuidV4Js from 'uuid-v4.js';
import Markdown from '../components/Markdown.react';
import {
  changeQuestionIndex,
  answerTheQuestion as answerTheQuestionConstant
} from '../constants/constants';
import {withRouter} from 'react-router';

const mapStateToProps = ({testsInfo}) => ({
  questions: testsInfo.testQuestions,
  questionIndex: testsInfo.questionIndex,
});

const mapDispatchToProps = dispatch => ({
  answerTheQuestion: answer => dispatch({
    type: answerTheQuestionConstant,
    answer,
  }),
  goToNextQuestion: newIndex => dispatch({
    type: changeQuestionIndex,
    newIndex,
  }),
  endTest: () => dispatch(),
});

class Answers extends React.PureComponent {

  constructor() {
    super();
    this.buttonHandler = this.buttonHandler.bind(this);
    this.inputs = [];
  };

  buttonHandler(e) {
    const {
      goToNextQuestion,
      history,
      questionIndex,
      questions,
      answerTheQuestion
    } = this.props;
    const nextQuestionIndex = Number(questionIndex) + 1;
    const inputs = this.inputs.filter(input => !!input);
    const answer = {
      questionIndex,
      questionAnswer: inputs.reduce(
        (acc, input, i) => {
          if (input.checked) {
            return acc.concat([i]);
          };
          return acc;
        },
        []
      )
    };
    answerTheQuestion(answer);
    return nextQuestionIndex < questions.length ?
      goToNextQuestion(nextQuestionIndex) :
      history.push('/test-result');
  };

  componentWillUpdate() {
    this.inputs.length = 0;
  };

  render() {
    const {questions, questionIndex, goToNextQuestion, history} = this.props;
    return (
      <div className="answers">
        {
          questions[questionIndex].answers.map(
            answer =>
              <div className={questions[questionIndex].type} key={uuidV4Js()}>
                <label>
                  <input
                    type={questions[questionIndex].type}
                    name="input"
                    ref={(input) => this.inputs.push(input)}
                  />
                  <Markdown html={answer.text} />
                </label>
              </div>
          )
        }
        <button className="btn btn-lg btn-success" onClick={this.buttonHandler}>
          Answer &#8658;
        </button>
      </div>
    );
  };
};

Answers.propTypes = {
  questions: PropTypes.array.isRequired,
  questionIndex: PropTypes.number.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
  endTest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Answers));
