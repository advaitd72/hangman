import { fetchAnswer } from "../transport/fetchAnswer";

const randomNumGen = () => {
  const randomNum = Math.floor(Math.random() * 10);

  return randomNum > 4 ? randomNum : randomNum + 4;
};

export const getAnswerService = async () => {
  const length = randomNumGen();
  try {
    const result: string[] = await fetchAnswer(length);
    return result[0].toUpperCase();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    return "GEOGRAPHY";
  }
};
