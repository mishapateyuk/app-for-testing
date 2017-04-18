import React from 'react';
import {connect} from 'react-redux';
import TestItem from '../compontents/TestItem.react';
import Loading from '../compontents/Loading.react';
import {loadTestsDescriptions} from '../actions/testsActionCreators';

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadTestsDescriptions()),
});

const mapStateToProps = ({tests}) => ({
  tests,
});

class TestsList extends React.PureComponent {

  componentDidMount() {
    this.props.load();
  };

  render () {
    return !this.props.tests ? <Loading /> :
      this.props.tests.map(test => <TestItem key={test.id} />);
  };
};

TestsList.propTypes = {
  load: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestsList);
