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
  goToNextQuestion as goToNextQuestionAction
} from '../actions/testsActionCreators';

const mapStateToProps = ({testsInfo, testInProgress}) => ({
  questions: testsInfo.testQuestions,
  questionId: testInProgress.questionId,
  testAnswers: testInProgress.testAnswers,
});

const mapDispatchToProps = dispatch => ({
  answerTheQuestion: answer => dispatch(answerTheQuestionAction(answer)),
  goToNextQuestion: (questions, testAnswers) =>dispatch(
    goToNextQuestionAction(questions, testAnswers)
  ),
  setInitialQuestionId: id => dispatch({
    type: setInitialQuestionId,
    id,
  }),
});

class Answers extends React.PureComponent {

  constructor() {
    super();
  };

  componentDidMount() {
    if (this.props.questionId === null) {
      this.props.setInitialQuestionId(this.props.questions[0].id);
    };
  };

  buttonHandler(e) {
    const {goToNextQuestion, questions, testAnswers} = this.props;
    this.props.goToNextQuestion(questions, testAnswers);
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
                      name={answer.id}
                    />
                    <Markdown html={answer.text} />
                  </label>
                </div>
            )
          }
          <button
            className="btn btn-lg btn-success"
            onClick={this.buttonHandler}
          >
            Answer &#8658;
          </button>
        </div>
    );
  };
};

Answers.propTypes = {
  questions: PropTypes.array.isRequired,
  testAnswers: PropTypes.array.isRequired,
  questionId: PropTypes.string,
  goToNextQuestion: PropTypes.func.isRequired,
  answerTheQuestion: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Answers));
