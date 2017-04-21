import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserRegistrationForm from './UserRegistrationForm.react';
import {loadTestQuestions} from '../actions/testsActionCreators';

const mapDispatchToProps = dispatch => ({
  load: id => dispatch(loadTestQuestions),
});

const mapStateToProps = ({userInfo}) => ({
  userName: userInfo.userName,
});

class TestInPropgress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.load(this.props.match.id);
  };
  render () {
    return !this.props.userName ?
      <UserRegistrationForm /> :
      <h1 className="marketing">{this.props.userName}</h1>;
  };
};

TestInPropgress.propTypes = {
  load: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestInPropgress);
