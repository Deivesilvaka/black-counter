function calculate() {
  const lastTime = getLastTime();
  const today = new dayjs(new Date());

  const hoursBetween = today.diff(lastTime, "hours");

  const hardCoreMode = isHardCore() ? "*Hardcore Mode:*" : "";
  const text = `${hardCoreMode} Este usuário está a mais de ${hoursBetween} horas sem ouvir *Black do Pearl Jam*`;

  return output(text);
}

function output(text) {
  document.querySelector(".output").innerHTML = text;

  return text;
}

function outputEvent(text) {
  document.querySelector(".events").innerHTML = text;

  return text;
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
  let lastTimePrompt = prompt("Cole aqui seu ultimo texto")
    .replaceAll("*", "")
    .replace("Black: ", "")
    .replace(" - ", "T");

  if (!lastTimePrompt || lastTimePrompt.length < 19) {
    alert("Adicione seu ultimo registo de quando ouviu Black");
    return;
  }

  lastTimePrompt += lastTimePrompt.length === 25 ? ":00" : "";

  lastTimePrompt = lastTimePrompt.split("T");

  const date = lastTimePrompt[0].split("/").reverse();

  const newDate = `${date[0]}-${date[1]}-${date[2]}T${lastTimePrompt[1]}`;

  setLastTime(newDate);
  calculate();
}

async function black() {
  if (isSafe()) {
    alert("Hoje é feriado, você não pode marcar zerar o timer");
    return;
  }

  const lastTime = dayjs(setLastTime())
    .format("DD/MM/YYYY hh:mm:ss")
    .split(" ");

  const text = `*Black:* ${lastTime[0]} - ${lastTime[1]}`;

  await copyToClipboard(text);

  return output(text);
}

function setup() {
  hardcoreButton();

  const lastTime = window.localStorage.getItem("black");

  if (!lastTime) {
    const text =
      "Escute Black do Pearl Jam e depois clique no botão 'Black 👍' para iniciar";
    output(text);
    return;
  }

  setEvents();

  calculate();
}

setup();
