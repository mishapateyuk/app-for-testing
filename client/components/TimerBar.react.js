import React from 'react';
import {connect} from 'react-redux';
import {startTest, clearCurrentTestInfo} from '../constants/constants';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

const mapStateToProps = ({testsInfo}) => ({
  testTime: testsInfo.testPreviewInfo.time,
  testInitialTime: testsInfo.testInitialTime,
});

const mapDispatchToProps = dispatch => ({
  startTest: currentTestId => dispatch({
    type: startTest,
    initialTime: new Date().valueOf(),
    currentTestId,
  }),
  timeOver: () => dispatch({
    type: clearCurrentTestInfo,
  }),
});

class TimerBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      testTime: this.props.testTime.slice(0, -4) * 60,
      progress: 0,
      timeRemaining: '',
    };
  };

  tick() {
    const currentDate = new Date().valueOf();
    const testInitialTime = this.props.testInitialTime;
    const testTime = this.state.testTime;
    const timeDifference = Math.round((currentDate - testInitialTime) / 1000);
    const progress = timeDifference / testTime * 100;
    const minutesRemaining = Math.floor((testTime - timeDifference) / 60);
    const secondsRemaining =
      Math.floor(testTime - timeDifference) - minutesRemaining * 60;
    const timeRemaining = `${minutesRemaining} :
      ${secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining}`;
    if (minutesRemaining < 0) {
      clearInterval(this.interval);
      this.props.history.push('/test-result');
      return;
    }
    this.setState({
      progress,
      timeRemaining
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
    this.props.timeOver();
  };

  componentDidMount() {
    if (!this.props.testInitialTime) {
      this.props.startTest(this.props.currentTestId);
    }
    this.interval = setInterval(this.tick.bind(this), 16);
  };

  render () {
    return (
      <div className="progress ">
        <span className="progress-time">{this.state.timeRemaining}</span>
        <div
          className="progress-bar progress-bar-striped active"
          style={{width: `${this.state.progress}%`}}
        />
      </div>
    );
  };
};

TimerBar.propTypes = {
  testTime: PropTypes.string.isRequired,
  testInitialTime: PropTypes.number,
  startTest: PropTypes.func.isRequired,
  timeOver: PropTypes.func.isRequired,
  currentTestId: PropTypes.string,
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TimerBar));
