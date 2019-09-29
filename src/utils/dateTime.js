export function getCurrentDate(dateTime) {
  let newDate = new Date(dateTime * 1000);
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}-${month < 10 ? `0${month}` : `${month}`}-${year}`;
}
