function calculate() {
  const lastTime = getLastTime();
  const today = new dayjs(new Date());

  const hoursBetween = today.diff(lastTime, "hours");

  document.querySelector(
    ".output"
  ).innerHTML = `Este usuário está a mais de ${hoursBetween} horas sem ouvir *Black - Pearl Jam*`;
}

function getLastTime() {
  let lastTime = window.localStorage.getItem("black");

  if (!lastTime) {
    lastTime = new Date("2024-07-12T06:23:00");
    window.localStorage.setItem("black", lastTime);
  }

  return new Date(lastTime);
}

function setLastTime(time) {
  window.localStorage.setItem("black", time ?? new Date());
  return getLastTime();
}

function anotherDate() {
  let lastTimePrompt =
    prompt("Cole aqui seu ultimo texto")
      .replace("Black: ", "")
      .replace(" - ", "T") + ":00";

  lastTimePrompt = lastTimePrompt.split("T");

  const date = lastTimePrompt[0].split("/").reverse();

  const newDate = `${date[0]}-${date[1]}-${date[2]}T${lastTimePrompt[1]}`;

  setLastTime(newDate);
  calculate();
}

calculate();

function black() {
  const lastTime = dayjs(setLastTime())
    .format("DD/MM/YYYY hh:mm:ss")
    .split(" ");

  document.querySelector(
    ".output"
  ).innerHTML = `*Black:* ${lastTime[0]} - ${lastTime[1]}`;
}
