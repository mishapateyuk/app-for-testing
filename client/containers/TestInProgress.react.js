import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserRegistrationForm from './UserRegistrationForm.react';
import {loadTestQuestions, loadTestPreview} from '../actions/testsActionCreators';
import TimerBar from '../components/TimerBar.react';
import QuestionsBar from '../components/QuestionsBar.react';
import QuestionText from '../components/QuestionText.react';
import Answers from './Answers.react';
import {
  clearCurrentTestInfo,
  clearTetsAnswers,
  clearTestQuestions
} from '../constants/constants';

const mapDispatchToProps = dispatch => ({
  loadQuestions: id => dispatch(loadTestQuestions(id)),
  loadPreviewInfo: id => dispatch(loadTestPreview(id)),
  clearCurrentTestInfo: () => dispatch({type: clearCurrentTestInfo}),
  clearTetsAnswers: () => dispatch({type: clearTetsAnswers}),
  clearTestQuestions: () => dispatch({type: clearTestQuestions}),
});

const mapStateToProps = ({testsInfo, userInfo, testInProgress}) => ({
  testPreviewInfo: testsInfo.testPreviewInfo,
  userName: userInfo.userName,
  questionNumber: testInProgress.questionIndex,
});

class TestInProgress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.props.clearCurrentTestInfo();
    this.props.clearTetsAnswers();
    this.props.clearTestQuestions();
    this.props.loadQuestions(this.id);
    if (!this.props.testPreviewInfo) {
      this.props.loadPreviewInfo(this.id);
    };
  };

  render () {
    return !this.props.userName ?
      <UserRegistrationForm /> :
      <div className="marketing">
        <QuestionText />
        <Answers />
        <TimerBar />
        <QuestionsBar />
      </div>;
  };
};

TestInProgress.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  loadPreviewInfo: PropTypes.func.isRequired,
  clearCurrentTestInfo: PropTypes.func.isRequired,
  clearTetsAnswers: PropTypes.func.isRequired,
  clearTestQuestions: PropTypes.func.isRequired,
  testPreviewInfo: PropTypes.object,
  userName: PropTypes.string,
  questionNumber: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestInProgress);
