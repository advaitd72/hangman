export const fetchAnswer = async (length: number): Promise<string[]> => {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?length=" + length
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the word");
  }

  const result = await response.json();

  return result;
};
