import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TestItem from '../compontents/TestItem.react';
import Loading from '../compontents/Loading.react';
import {loadTestPreview} from '../actions/testsActionCreators';

const mapDispatchToProps = dispatch => ({
  load: (id) => dispatch(loadTestPreview(id)),
});

const mapStateToProps = ({testsInfo}) => ({
  testPreviewInfo: testsInfo.testPreviewInfo,
});

class TestPreview extends React.PureComponent {

  componentDidMount() {
    this.props.load();
  };

  render () {
    return !this.props.testPreviewInfo ? <Loading /> :
      <div className="marketing">
        <h1>INFO IS HERE!</h1>
      </div>;
  };
};

TestPreview.propTypes = {
  load: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPreview);
