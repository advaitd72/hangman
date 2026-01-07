import type { FC } from "react";

const Stickman: FC<{ score: number }> = ({ score }) => {
  return (
    <div className="row stickman-box">
      {score >= 1 && <div className="stick-base"></div>}
      {score >= 2 && <div className="column"></div>}
      {score >= 3 && <div className="hanger"></div>}
      {score >= 4 && <div className="hook"></div>}
      {score >= 5 && score < 6 && <div className="man-head"></div>}
      {score > 5 && <div className="man-head dead"></div>}
      {score >= 5 && <div className="torso"></div>}
      {score >= 5 && <div className="left-leg"></div>}
      {score >= 5 && <div className="left-hand"></div>}
      {score >= 5 && <div className="right-leg"></div>}
      {score >= 5 && <div className="right-hand"></div>}
    </div>
  );
};

export default Stickman;
