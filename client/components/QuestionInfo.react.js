import React from 'react';
import QuestionText from './QuestionText.react';
import AnswerInReport from './AnswerInReport.react';
import uuidV4Js from 'uuid-v4.js';

class QuestionInfo extends React.Component {
  render() {
    const {question, userAnswers, rightAnswers} = this.props;
    const bg = userAnswers.result ? 'bg-success' : 'bg-danger';
    return (
      <div className={`${bg} answer-wrapper`}>
        <QuestionText text={question.text} />
        {
          question.answers.map(
            a =>
            <AnswerInReport
              answer={a}
              userAnswers={userAnswers}
              rightAnswers={rightAnswers}
              type={question.type}
              key={uuidV4Js()}
            />
          )
        }
      </div>
    );
  };
};

export default QuestionInfo;
