import React from 'react';
import Markdown from './Markdown.react';

const AnswerInReport = ({rightAnswers, userAnswers, answer, type}) => {
  const isChecked = !!~userAnswers.answer.indexOf(answer.id);
  const isTrue = !!~rightAnswers.indexOf(answer.id) ? 'true-answer' : '';
  const isFalse =
    !!~userAnswers.answer.indexOf(answer.id) &&
    !~rightAnswers.indexOf(answer.id) ? 'wrong-answer' : '';
  return <div className={type}>
    <label>
      <input
        type={type}
        disabled
        checked={isChecked}
      />
      <Markdown html={answer.text} className={`${isFalse} ${isTrue}`} />
    </label>
  </div>;
};

export default AnswerInReport;
