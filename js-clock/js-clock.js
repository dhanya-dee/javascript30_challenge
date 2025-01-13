var hours = moment().format("h");
var minutes = moment().format("mm");
var seconds = moment().format("ss");

function setTime() {
  const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const secondsAngle = (seconds / 60) * 360 + 90;

  let elementHourHand = document.querySelector(".hour-hand");
  elementHourHand.style.transform = `rotate(${hourAngle}deg)`;

  let elementMinHand = document.querySelector(".min-hand");
  elementMinHand.style.transform = `rotate(${minutesAngle}deg)`;

  let elementSecondsHand = document.querySelector(".second-hand");
  elementSecondsHand.style.transform = `rotate(${secondsAngle}deg)`;
  elementSecondsHand.style.background = "#ff00000";
  elementSecondsHand.style.height = "2px";
}

setInterval("setTime()", 1000);

setTime();
