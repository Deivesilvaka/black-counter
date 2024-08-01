function setEvents() {
  outputEvent(`Dia Normal`);

  isValentinesDay();

  if (isHardCore()) {
    hardCoreMode();
  }
}

function isHardCore() {
  if (!window.localStorage.getItem("hardcore")) {
    window.localStorage.setItem("hardcore", "false");
  }

  return window.localStorage.getItem("hardcore") === "true";
}

function hardCoreMode() {
  thursday();
}

function thursday() {
  const { day } = today();

  if (day === "Quinta-Feira") {
    outputEvent(`Hardcode Mode: ${day}`);
  }
}

function isValentinesDay() {
  const { date } = today();

  if (date === "12/06") {
    outputEvent(`Hardcode Mode: Dia dos Namorados`);
  }
}

function today() {
  const today = new Date();

  const days = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  const date = `${today.getDate().toString().padStart(2, "0")}/${(
    today.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}`;

  return {
    day: days[today.getDay()],
    date,
  };
}

function hardcoreButton() {
  if (isHardCore()) {
    document.querySelector(".hcBtn").innerHTML = "Hardcore Mode: Ativado";
    return;
  }

  document.querySelector(".hcBtn").innerHTML = "Hardcore Mode: Desativado";
}

function switchHardcodeMode() {
  window.localStorage.setItem("hardcore", `${!isHardCore()}`);
  setup();
}
