import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TestItem from '../components/TestItem.react';
import Loading from '../components/Loading.react';
import {loadTestsDescriptions} from '../actions/testsActionCreators';

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadTestsDescriptions()),
});

const mapStateToProps = ({testsInfo}) => ({
  testsDescriptions: testsInfo.testsDescriptions,
});

class TestsList extends React.PureComponent {

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

TestsList.propTypes = {
  load: PropTypes.func.isRequired,
  testsInfo: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestsList);
