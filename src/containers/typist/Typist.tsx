import { type FC, useState } from "react";

import { Keyboard, AnswerDisplay } from "./components";

interface TypistProps {
  answer: string;
  setScore: (newScore: number) => void;
}

const Typist: FC<TypistProps> = ({ answer, setScore }) => {
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(
    new Set<string>()
  );
  const [wrongLetters, setWrongLetters] = useState<Set<string>>(
    new Set<string>()
  );

  const onKeyPressCallback = (letterPressed: string) => {
    if (answer.includes(letterPressed)) {
      setGuessedLetters((prev) => {
        const newGuessedLetters = new Set(prev);
        return newGuessedLetters.add(letterPressed);
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
      <AnswerDisplay answer={answer} guessedLetters={guessedLetters} />
      <Keyboard
        onKeyPressCallback={onKeyPressCallback}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
      />
    </div>
  );
};

export default Typist;
