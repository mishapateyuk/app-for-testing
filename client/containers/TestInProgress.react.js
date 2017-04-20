import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Loading from '../compontents/Loading.react';
import {loadTestQuestions} from '../actions/testsActionCreators';

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = ({testsInfo}) => ({
});

class TestInPropgress extends React.PureComponent {

  componentDidMount() {
    this.props.load();
  };

  render () {
    return !this.props.testsDescriptions ? <Loading /> :
      <div className="marketing">
        {this.props.testsDescriptions.map(
          (details, index) => {
            return (!((index + 1) % 3)) ?
              [
                <TestItem key={details.id} details={details} />,
                <hr className="featurette-divider" />
              ] :
            <TestItem key={details.id} details={details} />;
          }
        )}
      </div>;
  };
};

TestInPropgress.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TestInPropgress);