import React from 'react';

const QuestionNumber = ({questionNumber, questionsCount}) =>
  <div className="questions-progress">
    {`${questionNumber}/${questionsCount}`}
  </div>;

export default QuestionNumber;
