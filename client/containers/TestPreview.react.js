import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CLEAR_USERNAME, CLEAR_TEST_PREVIEW_INFO} from '../constants/constants';
import {loadTestPreview} from '../actions/testsActionCreators';
import Loading from '../components/Loading.react';
import TestPreviewHeader from '../components/TestPreviewHeader.react';
import TestBriefInformation from '../components/TestBriefInformation.react';
import TestTopics from '../components/TestTopics.react';
import TestTopUsers from '../components/TestTopUsers.react';

const mapDispatchToProps = dispatch => ({
  loadTestPreview: id => dispatch(loadTestPreview(id)),
  clearTestPeview: () => dispatch({
    type: CLEAR_TEST_PREVIEW_INFO,
  }),
  clearUserName: () => dispatch({type: CLEAR_USERNAME}),
});

const mapStateToProps = ({testsInfo}) => ({
  testPreviewInfo: testsInfo.testPreviewInfo,
});

class TestPreview extends React.PureComponent {

  constructor(props) {
    super(props);
    this.props.clearTestPeview();
    this.props.clearUserName();
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
          id={this.props.match.params.id}
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
  testPreviewInfo: PropTypes.object,
  loadTestPreview: PropTypes.func.isRequired,
  clearTestPeview: PropTypes.func.isRequired,
  clearUserName: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPreview);
