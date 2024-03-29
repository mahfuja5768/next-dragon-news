export function getCurrentDate() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
    "December",
  ];

  const currentDay = days[now.getDay()];
  const currentMonth = months[now.getMonth()];
  const currentDate = now.getDate();
  const currentYear = now.getFullYear();

  return `${currentDay}, ${currentMonth}, ${currentDate}, ${currentYear} `;
}
