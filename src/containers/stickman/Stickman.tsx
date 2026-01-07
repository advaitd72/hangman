import type { FC } from "react";

const Stickman: FC<{ wrongCounter: number }> = ({ wrongCounter }) => {
  return (
    <div className="row stickman-box">
      {wrongCounter >= 1 && <div className="stick-base"></div>}
      {wrongCounter >= 2 && <div className="column"></div>}
      {wrongCounter >= 3 && <div className="hanger"></div>}
      {wrongCounter >= 4 && <div className="hook"></div>}
      {wrongCounter >= 5 && wrongCounter < 6 && (
        <div className="man-head"></div>
      )}
      {wrongCounter > 5 && <div className="man-head dead"></div>}
      {wrongCounter >= 5 && <div className="torso"></div>}
      {wrongCounter >= 5 && <div className="left-leg"></div>}
      {wrongCounter >= 5 && <div className="left-hand"></div>}
      {wrongCounter >= 5 && <div className="right-leg"></div>}
      {wrongCounter >= 5 && <div className="right-hand"></div>}
    </div>
  );
};

export default Stickman;
