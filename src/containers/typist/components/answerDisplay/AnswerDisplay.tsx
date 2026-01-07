import { type FC } from "react";

import LetterBox from "../letterBox/LetterBox";

type AnswerDisplayProps = {
  answerBuilder: string[];
  answer: string;
};

const AnswerDisplay: FC<AnswerDisplayProps> = ({ answerBuilder }) => {
  const renderAnswer = () => {
    return answerBuilder.map((letter, index) => {
      return <LetterBox key={index} letter={letter} />;
    });
  };

  return <div className="answer-display row">{renderAnswer()}</div>;
};

export default AnswerDisplay;
