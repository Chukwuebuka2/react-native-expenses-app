export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
export const  getDateMinusDays = (date, day) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - day);
}