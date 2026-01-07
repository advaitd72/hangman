import { useState, useEffect } from "react";

import "./App.css";
import { Timer, Stickman, Typist } from "./containers";
import { getAnswerService } from "./services/getAnswer";
import { getPositionOfKnownLetters } from "./containers/typist/components/answerDisplay/helpers";

//when the counter hits 6 and the answer is not built.
//need to stop the game, and do some cool modal
// to show what the current word was and button to reset the game

//when the answer is built, again a modal, some confetti
//congratulate and show button to reset
function App() {
  const [answer, setAnswer] = useState<string>("");
  const [wrongCounter, setWrongCounter] = useState<number>(0);
  const [answerBuilder, setAnswerBuilder] = useState<string[]>(
    new Array(answer.length).fill("")
  );

  useEffect(() => {
    (async () => {
      const newAnswer = await getAnswerService();
      setAnswer(newAnswer);
    })();
  }, []);

  //to build inital answer with known words
  useEffect(() => {
    const lettersArray = new Array(answer.length).fill("");
    const positionOfKnownLetters = getPositionOfKnownLetters(answer);

    for (let index = 0; index < answer.length; index++) {
      let letter = "";
      if (
        positionOfKnownLetters.some((position) => position === index) ||
        positionOfKnownLetters.some(
          (position) => answer[position] === answer[index]
        )
      ) {
        letter = answer[index];
      }

      lettersArray[index] = letter;
    }

    setAnswerBuilder(lettersArray);
  }, [answer]);

  return (
    <div className="app-wrapper">
      <Timer />
      <Stickman wrongCounter={wrongCounter} />
      <Typist
        answer={answer}
        setScore={setWrongCounter}
        answerBuilder={answerBuilder}
        setAnswerBuilder={setAnswerBuilder}
      />
    </div>
  );
}

export default App;
