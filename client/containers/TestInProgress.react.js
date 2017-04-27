import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserRegistrationForm from './UserRegistrationForm.react';
import {loadTestQuestions, loadTestPreview} from '../actions/testsActionCreators';
import TimerBar from '../components/TimerBar.react';
import QuestionText from '../components/QuestionText.react';
import Answers from '../components/Answers.react';
import {clearCurrentTestInfo} from '../constants/constants';

const mapDispatchToProps = dispatch => ({
  loadQuestions: id => dispatch(loadTestQuestions(id)),
  loadPreviewInfo: id => dispatch(loadTestPreview(id)),
  clearCurrentTestInfo: () => dispatch({type: clearCurrentTestInfo}),
});

const mapStateToProps = state => ({
  testPreviewInfo: state.testsInfo.testPreviewInfo,
  currentTestId: state.testsInfo.currentTestId,
});

class TestInProgress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.props.clearCurrentTestInfo();
    this.state = {
      userName: null
    };
    this.props.loadQuestions(this.id);
    if (!this.props.testPreviewInfo) {
      this.props.loadPreviewInfo(this.id);
    };
  };

  setUserName(userName) {
    this.setState({
      userName,
    });
  };

  render () {
    return !this.state.userName ?
      <UserRegistrationForm setUserName={this.setUserName.bind(this)} /> :
      <div className="marketing">
        <QuestionText />
        <Answers />
        <TimerBar currentTestId={this.id} />
      </div>;
  };
};

TestInProgress.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  loadPreviewInfo: PropTypes.func.isRequired,
  testInfo: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestInProgress);
