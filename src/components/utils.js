const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const suffixes = {
  1: "st",
  2: "nd",
  3: "rd",
  4: "th",
  5: "th",
  6: "th",
  7: "th",
  8: "th",
  9: "th",
  0: "th"
};

export const formatDate = date => {
  const newDate = new Date(date);
  const dayString = newDate
    .getDate()
    .toString()
    .slice(-1);
  return `${days[newDate.getDay()]} ${
    months[newDate.getMonth()]
  } ${newDate.getDate()}${suffixes[dayString]}, ${newDate.getFullYear()}`;
};

export const truncateText = string => {
  return string.slice(0, 90) + ". . .";
};
