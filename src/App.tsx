import { useState, useEffect } from "react";

import "./App.css";
import { Timer, Stickman, Typist } from "./containers";
import { getAnswerService } from "./services/getAnswer";

function App() {
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const newAnswer = await getAnswerService();
      setAnswer(newAnswer);
    })();
  }, []);

  return (
    <div className="app-wrapper">
      <Timer />
      <Stickman score={score} />
      <Typist answer={answer} setScore={setScore} />
    </div>
  );
}

export default App;
