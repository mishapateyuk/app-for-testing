import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clearTestPreviewInfo} from '../constants/constants';
import {loadTestPreview} from '../actions/testsActionCreators';
import Loading from '../compontents/Loading.react';
import TestPreviewHeader from '../compontents/TestPreviewHeader.react';
import TestBriefInformation from '../compontents/TestBriefInformation.react';
import TestTopics from '../compontents/TestTopics.react';
import TestTopUsers from '../compontents/TestTopUsers.react';

const mapDispatchToProps = dispatch => ({
  loadTestPreview: id => dispatch(loadTestPreview(id)),
  clearTestPeview: () => dispatch({
    type: clearTestPreviewInfo,
  }),
});

const mapStateToProps = ({testsInfo}) => ({
  testPreviewInfo: testsInfo.testPreviewInfo,
});

class TestPreview extends React.PureComponent {

  constructor(props) {
    super(props);
    this.props.clearTestPeview();
  };

  componentDidMount() {
    this.props.loadTestPreview(this.props.match.params.id);
  };

  render () {
    const previewInfo = this.props.testPreviewInfo;
    return !previewInfo ? <Loading /> :
      <div className="marketing">
        <TestPreviewHeader
          name={previewInfo.name}
          description={previewInfo.description}
        />
        <div className="row">
          <TestBriefInformation
            time={previewInfo.time}
            questionsCount={previewInfo.questionsCount}
            level={previewInfo.level}
            stars={previewInfo.stars}
          />
          <TestTopics testTopics={previewInfo.testTopics} />
          <TestTopUsers
            topUsers={previewInfo.topUsers}
            questionsCount={previewInfo.questionsCount}
          />
        </div>
      </div>;
  };
};

TestPreview.propTypes = {
  loadTestPreview: PropTypes.func.isRequired,
  clearTestPeview: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPreview);
