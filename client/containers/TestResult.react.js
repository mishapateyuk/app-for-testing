import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {checkAnswers as checkAnswersAction} from '../actions/testsActionCreators';
import Loading from '../components/Loading.react';

const mapStateToProps = ({testsInfo}) => ({
  answers: testsInfo.answers,
  id: testsInfo.testId,
});

const mapDispatchToProps = dispatch => ({
  checkAnswers: (answers, id) => dispatch(checkAnswersAction(answers, id)),
});

class TestResult extends React.PureComponent {
  componentDidMount() {
    const {checkAnswers, answers, id} = this.props;
    if (answers && id) {
      checkAnswers(answers, id);
    };
  };
  render() {
    if (!this.props.answers || !this.props.id) {
      return <h1 className="marketing">There's no test result</h1>;
    };
    return <Loading />;
  };
};

TestResult.propTypes = {
  answers: PropTypes.array,
  id: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResult);
