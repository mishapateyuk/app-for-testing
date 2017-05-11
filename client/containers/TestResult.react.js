import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {checkAnswers as checkAnswersAction} from '../actions/testsActionCreators';
import Loading from '../components/Loading.react';

const mapStateToProps = ({testInProgress, userInfo}) => ({
  answers: testInProgress.testAnswers,
  id: testInProgress.currentTestId,
  userName: userInfo.userName,
  testResult: testInProgress.testResult,
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
      <div>
        <div className="test-result bg-info">
          {`${userName}'s test result is ${testResult.rightAnswersCount}/${testResult.questionsCount}`}
        </div>
        <h3>
            Here some recommendations for you:
        </h3>
        {testResult.recommendations.map(rec => <p>{rec}</p>)}
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
