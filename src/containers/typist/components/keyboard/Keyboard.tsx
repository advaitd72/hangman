import { Button } from "@mui/material";
import { type FC } from "react";

type KeyboardProps = {
  onKeyPressCallback: (letter: string) => void;
  wrongLetters: Set<string>;
  answerBuilder: string[];
};

const Keyboard: FC<KeyboardProps> = ({
  onKeyPressCallback,
  answerBuilder,
  wrongLetters,
}) => {
  const renderKeys = () => {
    const keysArray = new Array(26).fill(null);

    return keysArray.map((_, index) => {
      const letter = String.fromCharCode(index + 65);
      const colorClass = answerBuilder.includes(letter)
        ? " success"
        : wrongLetters.has(letter)
        ? " error"
        : "";

      return (
        <Button
          variant="outlined"
          key={index}
          onClick={() => onKeyPressCallback(letter)}
          disabled={wrongLetters.has(letter) || answerBuilder.includes(letter)}
          className={"key-button" + colorClass}
        >
          {letter}
        </Button>
      );
    });
  };

  return <div>{renderKeys()}</div>;
};

export default Keyboard;
