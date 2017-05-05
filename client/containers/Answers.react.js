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
  goToNextQuestion as goToNextQuestionAction,
  skipTheQuestion as skipTheQuestionAction
} from '../actions/testsActionCreators';

const mapStateToProps = ({testsInfo, testInProgress}) => ({
  testId: testInProgress.currentTestId,
  questions: testsInfo.testQuestions,
  questionId: testInProgress.questionId,
  testAnswers: testInProgress.testAnswers,
  skipped: testInProgress.skipped,
});

const mapDispatchToProps = dispatch => ({
  answerTheQuestion: (questionId, answer, testId) => dispatch(
    answerTheQuestionAction(questionId, answer, testId)
  ),
  goToNextQuestion: (questions, testAnswers) => dispatch(
    goToNextQuestionAction(questions, testAnswers)
  ),
  setInitialQuestionId: id => dispatch({
    type: setInitialQuestionId,
    id,
  }),
  skipTheQuestion: id => dispatch(
    skipTheQuestionAction(id)
  ),
});

class Answers extends React.PureComponent {

  constructor() {
    super();
    this.answerHandler = this.answerHandler.bind(this);
    this.skipHandler = this.skipHandler.bind(this);
  };

  componentDidMount() {
    if (this.props.questionId === null) {
      this.props.setInitialQuestionId(this.props.questions[0].id);
    };
  };

  answerHandler(e) {
    const {
      goToNextQuestion,
      skipped,
      testAnswers,
      questionId,
      answerTheQuestion,
      testId
    } = this.props;
    const inputs = Array.from(
      this.answersWrapper.getElementsByTagName('input')
    );
    const answer = inputs.reduce((acc, curr) => {
      return curr.checked ?
        acc.concat([curr.id]) :
        acc;
    }, []);
    answerTheQuestion(questionId, answer, testId);
    goToNextQuestion(skipped, testAnswers);
  };

  skipHandler() {
    const {questionId} = this.props;
    skipTheQuestion(questionId);
  };

  render() {
    const {questionId, questions} = this.props;
    const currentQuestion = questions
      .find(question => question.id === questionId);
    return (
      questionId === null ?
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
  questionId: PropTypes.string,
  testId: PropTypes.string,
  skipped: PropTypes.array.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
  answerTheQuestion: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Answers));
