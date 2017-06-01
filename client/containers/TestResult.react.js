import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  checkAnswers as checkAnswersAction
} from '../actions/testsActionCreators';
import Loading from '../components/Loading.react';
import uuidV4Js from 'uuid-v4.js';
import QuestionInfo from '../components/QuestionInfo.react';

const mapStateToProps = ({testInProgress, userInfo, testsInfo}) => ({
  answers: testInProgress.testAnswers,
  id: testInProgress.currentTestId,
  userName: userInfo.userName,
  questions: testsInfo.testQuestions,
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
    const {
      answers,
      id,
      testResult,
      userName,
      questions
    } = this.props;
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
        {
          questions.map(
            question =>
              (<QuestionInfo
                key={uuidV4Js()}
                question={question}
                userAnswers={answers.find(a => a.id === question.id)}
                rightAnswers={testResult.rightAnswers[question.id]}
              />)
          )
        }
      </div> :
      <Loading />;
  };
};

TestResult.propTypes = {
  answers: PropTypes.array,
  id: PropTypes.string,
  userName: PropTypes.string,
  questions: PropTypes.array,
  testResult: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
