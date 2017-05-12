import React from 'react';
import PropTypes from 'prop-types';
import {markdown} from 'markdown';
import {connect} from 'react-redux';
import uuidV4Js from 'uuid-v4.js';
import Markdown from '../components/Markdown.react';
import {
  changeQuestionIndex,
  setInitialQuestionId
} from '../constants/constants';
import {withRouter} from 'react-router';
import {
  answerTheQuestion as answerTheQuestionAction,
  skipTheQuestion as skipTheQuestionAction
} from '../actions/testsActionCreators';

const mapStateToProps = ({testsInfo, testInProgress}) => ({
  testId: testInProgress.currentTestId,
  questions: testsInfo.testQuestions,
  currentQuestionId: testInProgress.currentQuestionId,
  testAnswers: testInProgress.testAnswers,
});

const mapDispatchToProps = dispatch => ({
  answerTheQuestion: (
    currentQuestionId,
    answer,
    testId,
    testAnswers,
    history
  ) => dispatch(
    answerTheQuestionAction(
      currentQuestionId,
      answer,
      testId,
      testAnswers,
      history
    )
  ),
  setInitialQuestionId: id => dispatch({
    type: setInitialQuestionId,
    id,
  }),
  skipTheQuestion: (id, testAnswers) => dispatch(
    skipTheQuestionAction(id, testAnswers)
  ),
});

class Answers extends React.PureComponent {

  constructor() {
    super();
    this.answerHandler = this.answerHandler.bind(this);
    this.skipHandler = this.skipHandler.bind(this);
  };

  componentDidMount() {
    if (this.props.currentQuestionId === null) {
      this.props.setInitialQuestionId(this.props.questions[0].id);
    };
  };

  answerHandler(e) {
    const {
      goToNextQuestion,
      testAnswers,
      currentQuestionId,
      answerTheQuestion,
      testId,
      history
    } = this.props;
    const inputs = Array.from(
      this.answersWrapper.getElementsByTagName('input')
    );

    const answer = inputs.reduce((acc, curr) => {
      return curr.checked ?
        acc.concat([curr.id]) :
        acc;
    }, []);

    answerTheQuestion(currentQuestionId, answer, testId, testAnswers, history);
  };

  skipHandler() {
    const {
      testAnswers,
      history,
      currentQuestionId,
      skipTheQuestion,
      goToNextQuestion
    } = this.props;

    skipTheQuestion(currentQuestionId, testAnswers);
  };

  render() {
    const {currentQuestionId, questions} = this.props;
    const currentQuestion = questions
      .find(question => question.id === currentQuestionId);
    return (
      currentQuestionId === null ?
        <div /> :
        <div className="answers" ref={div => {this.answersWrapper = div;}}>
          {
            currentQuestion.answers.map(
              answer =>
                <div
                  className={currentQuestion.type}
                  key={uuidV4Js()}
                >
                  <label>
                    <input
                      type={currentQuestion.type}
                      id={answer.id}
                      name="input"
                    />
                    <Markdown html={answer.text} />
                  </label>
                </div>
            )
          }
          <button
            className="btn btn-lg btn-success"
            onClick={this.answerHandler}
          >
            Answer &#8658;
          </button>
          <button
            className="btn btn-lg btn-warning"
            onClick={this.skipHandler}
          >
            Skip &#8658;
          </button>
        </div>
    );
  };
};

Answers.propTypes = {
  questions: PropTypes.array,
  testAnswers: PropTypes.array,
  currentQuestionId: PropTypes.string,
  testId: PropTypes.string,
  answerTheQuestion: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Answers));
