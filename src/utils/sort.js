export const sort = (data, sortType) => {
  data.sort((a, b) => {
    if (sortType === "alphaAZ") {
      return a.character > b.character ? 1 : -1;
    } else if (sortType === "alphaZA") {
      return a.character < b.character ? 1 : -1;
    } else if (sortType === "quoteAZ") {
      return a.quote > b.quote ? 1 : -1;
    } else if (sortType === "quoteZA") {
      return a.quote < b.quote ? 1 : -1;
    }
  });

  return data;
};
