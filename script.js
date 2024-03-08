function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getTotalDaysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function updateProgressBar() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const percentOfYear = ((diff / (oneDay * 365)) * 100).toFixed(4); // Round to 4 decimal places
  const remainingTime = (365 - diff / oneDay + 1) * 24 * 60 * 60 * 1000;

  document.getElementById("progress").style.width = percentOfYear + "%";
  document.getElementById("progress").innerText = percentOfYear + "%";

  const totalQuarters = Math.floor((diff / (1000 * 60 * 60 * 24 * 365)) * 4);
  const totalMonths = now.getMonth() + 1;
  const totalWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("current-year").innerText = new Date().getFullYear();

  const formattedDateTime = now.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  document.getElementById("current-date").innerText = formattedDateTime;
  document.getElementById("current-year").innerText = new Date().getFullYear();
  document.getElementById("remainingTime").innerText =
    "Remaining Time: " +
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds";

  document.getElementById("quartersProgress").style.width =
    (totalQuarters / 4) * 100 + "%";
  document.getElementById("quartersValue").innerText =
    totalQuarters + " out of 4";

  document.getElementById("monthsProgress").style.width =
    (totalMonths / 12) * 100 + "%";
  document.getElementById("monthsValue").innerText = totalMonths + " out of 12";

  document.getElementById("weeksProgress").style.width =
    (totalWeeks / 52) * 100 + "%";
  document.getElementById("weeksValue").innerText = totalWeeks + " out of 52";

  document.getElementById("daysProgress").style.width =
    (totalDays / getTotalDaysInYear(now.getFullYear())) * 100 + "%";
  document.getElementById("daysValue").innerText =
    totalDays + " out of " + getTotalDaysInYear(now.getFullYear());

    document.getElementById("hoursProgress").style.width = (totalHours / (isLeapYear(now.getFullYear()) ? 8784 : 8760)) * 100 + "%";
    document.getElementById("hoursValue").innerText = totalHours + " out of " + (isLeapYear(now.getFullYear()) ? 8784 : 8760);

    document.getElementById("secondsProgress").style.width = (totalSeconds / (isLeapYear(now.getFullYear()) ? 31622400 : 31536000)) * 100 + "%";
    document.getElementById("secondsValue").innerText = totalSeconds + " out of " + (isLeapYear(now.getFullYear()) ? 31622400 : 31536000);
}

setInterval(updateProgressBar, 1000);
