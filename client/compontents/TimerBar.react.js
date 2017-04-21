import React from 'react';
import {connect} from 'react-redux';
import {startTest, testTimeOver} from '../constants/constants';

const mapStateToProps = ({testsInfo}) => ({
  testTime: testsInfo.testPreviewInfo.time,
  testInitialTime: testsInfo.testInitialTime,
});

const mapDispatchToProps = dispatch => ({
  startTest: () => dispatch({
    type: startTest,
    initialTime: new Date().valueOf(),
  }),
  timeOver: () => dispatch({
    type: testTimeOver,
  }),
});

class TimerBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      testTime: this.props.testTime.slice(0, -4) * 60,
      progress: 0,
      timeRemaining: `${this.props.testTime.slice(0, -4)} : 00`,
    };
  };

  tick() {
    const currentDate = new Date().valueOf();
    const testInitialTime = this.props.testInitialTime;
    const testTime = this.state.testTime;
    const timeDifference = Math.round((currentDate - testInitialTime) / 1000);
    const progress = timeDifference / testTime * 100;
    const minutesRemaining = Math.floor((testTime - timeDifference) / 60);
    console.log(testTime, timeDifference);
    const secondsRemaining =
      Math.floor(testTime - timeDifference) - minutesRemaining * 60;
    const timeRemaining = `${minutesRemaining} : ${secondsRemaining}`;
    if (minutesRemaining < 0) {
      clearInterval(this.interval);
      this.props.timeOver();
      return;
    }
    this.setState({
      progress,
      timeRemaining
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  componentDidMount() {
    if (!this.props.testInitialTime) {
      this.props.startTest();
    }
    this.interval = setInterval(this.tick.bind(this), 1000);
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

export default connect(mapStateToProps, mapDispatchToProps)(TimerBar);
