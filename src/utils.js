export const formatDate = date => {
  date.setHours(date.getHours() - 8);
  return date.toISOString().split("T")[0];
};
