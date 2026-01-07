import { type FC, useState } from "react";

import { Keyboard, AnswerDisplay } from "./components";

interface TypistProps {
  answer: string;
  setScore: (newScore: number) => void;
  setAnswerBuilder: React.Dispatch<React.SetStateAction<string[]>>;
  answerBuilder: string[];
}

const Typist: FC<TypistProps> = ({
  answer,
  setScore,
  answerBuilder,
  setAnswerBuilder,
}) => {
  const [wrongLetters, setWrongLetters] = useState<Set<string>>(
    new Set<string>()
  );

  const onKeyPressCallback = (letterPressed: string) => {
    if (answer.includes(letterPressed)) {
      setAnswerBuilder((prev) => {
        for (let i = 0; i < answer.length; i++) {
          if (answer[i] === letterPressed) {
            prev[i] = answer[i];
          }
        }

        return [...prev];
      });
    } else {
      setWrongLetters((prev) => {
        const newWrongLetters = new Set(prev);
        newWrongLetters.add(letterPressed);
        setScore(newWrongLetters.size);
        return newWrongLetters;
      });
    }
  };

  return (
    <div className="typist">
      <AnswerDisplay answer={answer} answerBuilder={answerBuilder} />
      <Keyboard
        onKeyPressCallback={onKeyPressCallback}
        answerBuilder={answerBuilder}
        wrongLetters={wrongLetters}
      />
    </div>
  );
};

export default Typist;
