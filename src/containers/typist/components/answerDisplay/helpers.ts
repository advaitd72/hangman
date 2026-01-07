export const getHowManyLettersToShowInit = (answer: string) => {
  let countOfKnownLetters = 0;
  if (answer.length < 7) {
    countOfKnownLetters = 1;
  } else {
    countOfKnownLetters = 2;
  }

  return countOfKnownLetters;
};

export const getPositionOfKnownLetters = (answer: string) => {
  const countOfKnownLetters = getHowManyLettersToShowInit(answer);

  const positionOfKnownLetters = new Array(countOfKnownLetters).fill(null);
  positionOfKnownLetters.forEach((_, index) => {
    positionOfKnownLetters[index] = Math.floor(Math.random() * answer.length);
  });

  return positionOfKnownLetters;
};
