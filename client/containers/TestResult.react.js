import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {checkAnswers as checkAnswersAction} from '../actions/testsActionCreators';
import Loading from '../components/Loading.react';

const mapStateToProps = ({testsInfo, userInfo}) => ({
  answers: testsInfo.testAnswers,
  id: testsInfo.currentTestId,
  userName: userInfo.userName,
  testResult: testsInfo.testResult,
});

const mapDispatchToProps = dispatch => ({
  checkAnswers: (answers, id, userName) => dispatch(
    checkAnswersAction(answers, id, userName)
  ),
});

class TestResult extends React.PureComponent {
  componentDidMount() {
    const {checkAnswers, answers, id, userName} = this.props;
    if (answers && id && userName) {
      checkAnswers(answers, id, userName);
    };
  };
  render() {
    const {answers, id, testResult, userName} = this.props;
    if (!answers || !id || !userName) {
      return <div className="test-result bg-info">There's no test result</div>;
    };
    return testResult ?
      <div className="test-result bg-info">
        {`${userName}'s test result is ${testResult}`}
      </div> :
      <Loading />;
  };
};

TestResult.propTypes = {
  answers: PropTypes.array,
  id: PropTypes.string,
  userName: PropTypes.string,
  testResult: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
