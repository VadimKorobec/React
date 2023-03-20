export const getPageCounter = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};
