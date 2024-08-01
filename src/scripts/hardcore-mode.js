function setEvents() {
  outputEvent(`Dia Normal`);

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

  return { day: days[today.getDay()] };
}
