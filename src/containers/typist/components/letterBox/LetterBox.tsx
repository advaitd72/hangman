import type { FC } from "react";

type LetterBoxProps = {
  letter: string;
};

const LetterBox: FC<LetterBoxProps> = ({ letter }) => {
  return <div className="letter-box">{letter}</div>;
};

export default LetterBox;
