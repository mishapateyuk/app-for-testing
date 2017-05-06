import React from 'react';
import {connect} from 'react-redux';
import uuidV4Js from 'uuid-v4.js';
import PropTypes from 'prop-types';

const mapStateToProps = ({testsInfo, testInProgress}) => ({
  questions: testsInfo.testQuestions,
  answers: testInProgress.testAnswers,
  currentQuestionId: testInProgress.currentQuestionId,
});

class QuestionBar extends React.PureComponent {
  render() {
  const {questions, answers, currentQuestionId} = this.props;
  const length = questions.length;
    return (
      <div className="progress question-bar">
        {questions.map(
          question => {
            const answer = answers && answers.find(a => a.id === question.id);
            const bg = answer && (answer.result === true ?
              'bg-success' :
              answer.result === false ?
                'bg-danger' :
                'bg-primary');
            const currentQuestion = currentQuestionId === question.id ?
              'current-question' :
              '';
            return <div
              style={{width: `${100 / length}%`}}
              className={`question ${bg} ${currentQuestion}`}
              key={uuidV4Js()}
            />;
          }
        )}
      </div>
    );
  };
};

QuestionBar.propTypes = {
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array,
  currentQuestionId: PropTypes.string,
};

export default connect(mapStateToProps, null)(QuestionBar);
