import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserRegistrationForm from './UserRegistrationForm.react';
import {loadTestQuestions, loadTestPreview} from '../actions/testsActionCreators';
import TimerBar from '../compontents/TimerBar.react';

const mapDispatchToProps = dispatch => ({
  loadQuestions: id => dispatch(loadTestQuestions(id)),
  loadPreviewInfo: id => dispatch(loadTestPreview(id)),
});

const mapStateToProps = ({userInfo, testsInfo}) => ({
  userName: userInfo.userName,
  testPreviewInfo: testsInfo.testPreviewInfo,
});

class TestInProgress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.loadQuestions(this.props.match.params.id);
    if (!this.props.testPreviewInfo) {
      this.props.loadPreviewInfo(this.props.match.params.id);
    }
  };

  render () {
    return !this.props.userName ?
      <UserRegistrationForm /> :
      <div className="marketing">
        <TimerBar />
      </div>;
  };
};

TestInProgress.propTypes = {
  loadQuestions: PropTypes.func.isRequired,
  loadPreviewInfo: PropTypes.func.isRequired,
  userName: PropTypes.string,
  testInfo: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestInProgress);
