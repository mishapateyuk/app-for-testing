import React from 'react';
import {connect} from 'react-redux';
import uuidV4Js from 'uuid-v4.js';
import PropTypes from 'prop-types';

const mapStateToProps = ({testsInfo}) => ({
  questions: testsInfo.testQuestions,
});

class QuestionBar extends React.PureComponent {
  render() {
  const {questions} = this.props;
    return (
      <div className="progress question-bar">
        {questions.map(
          question => (
            <div
              style={{width: `${100 / questions.length}%`}}
              className="question bg-primary"
              data-question-id={question.id}
              key={uuidV4Js()}
            />
          )
        )}
      </div>
    );
  };
};

QuestionBar.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(QuestionBar);
