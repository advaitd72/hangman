import { type FC, useState, useEffect } from "react";

type AnswerDisplayProps = {
  guessedLetters: Set<string>;
  answer: string;
};

type LetterBoxProps = {
  letter: string;
};

const getPositionOfKnownLetters = (answer: string) => {
  let countOfKnownLetters = 0;
  if (answer.length < 7) {
    countOfKnownLetters = 1;
  } else {
    countOfKnownLetters = 2;
  }

  const positionOfKnownLetters = new Array(countOfKnownLetters).fill(null);
  positionOfKnownLetters.forEach((_, index) => {
    positionOfKnownLetters[index] = Math.floor(Math.random() * answer.length);
  });

  return positionOfKnownLetters;
};

const LetterBox: FC<LetterBoxProps> = ({ letter }) => {
  return <div className="letter-box">{letter}</div>;
};

const AnswerDisplay: FC<AnswerDisplayProps> = ({ guessedLetters, answer }) => {
  const [position, setPosition] = useState<number[]>([]);

  useEffect(() => {
    setPosition(getPositionOfKnownLetters(answer));
  }, [answer]);

  const renderAnswer = () => {
    const positionOfKnownLetters = position;
    const lettersArray = new Array(answer.length).fill(null);
    return lettersArray.map((_, index) => {
      let letter = "";
      if (
        positionOfKnownLetters.some((position) => position === index) ||
        positionOfKnownLetters.some(
          (position) => answer[position] === answer[index]
        )
      ) {
        letter = answer[index];
      } else {
        letter = guessedLetters.has(answer[index]) ? answer[index] : "";
      }

      return <LetterBox key={index} letter={letter} />;
    });
  };

  return <div className="answer-display row">{renderAnswer()}</div>;
};

export default AnswerDisplay;
