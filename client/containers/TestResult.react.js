import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  checkAnswers as checkAnswersAction
} from '../actions/testsActionCreators';
import Loading from '../components/Loading.react';
import uuidV4Js from 'uuid-v4.js';

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

  recommendations() {
    const {recommendations} = this.props.testResult;
    return recommendations.length ?
      (
        <div>
          <h4>
            You've done test with mistakes, so here some recommendations
            for you:
          </h4>
          <ul className="recommendations">
            {
              recommendations.map(
                recommendation => <li key={uuidV4Js()}>
                    <p>{recommendation}</p>
                  </li>
                )
            }
          </ul>
        </div>
      ) :
      (
        <div>
          <h4>
            You've done test without any mistakes, congratulation for you!
          </h4>
        </div>
      );
  };

  render() {
    const {answers, id, testResult, userName} = this.props;
    if (!answers || !id || !userName) {
      return <div className="marketing test-result bg-info">
        <h3>There's no test result</h3>
      </div>;
    };
    return testResult ?
      <div className="marketing">
        <h3 className="bg-info test-result">
          {
            `${userName}'s test result is `
          }
          <strong>
            {`${testResult.rightAnswersCount}/${testResult.questionsCount}`}
          </strong>
        </h3>
        {this.recommendations()}
      </div> :
      <Loading />;
  };
};

TestResult.propTypes = {
  answers: PropTypes.array,
  id: PropTypes.string,
  userName: PropTypes.string,
  testResult: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
