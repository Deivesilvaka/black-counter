function setEvents() {
  outputEvent(`Dia Normal`);

  isValentinesDay();

  if (isHardCore()) {
    verifyBirthDate();
    hardCoreMode();
  }

  isHollyday();
}

function isHardCore() {
  if (!window.localStorage.getItem("hardcore")) {
    window.localStorage.setItem("hardcore", "false");
  }

  return window.localStorage.getItem("hardcore") === "true";
}

function hardCoreMode() {
  thursday();
  birthdate();
}

function isHollyday() {
  if (isSafe()) {
    outputEvent("Feriado: Você pode ouvir Black sem medo");
  }
}

function isSafe() {
  const hollydays = [
    "01/01", // Confraternização Universal
    "12/02", // Carnaval
    "13/02", // Carnaval
    "29/03", // Sexta-feira Santa
    "21/04", // Tiradentes
    "01/05", // Dia do Trabalho
    "30/05", // Corpus Christi
    "07/09", // Independência do Brasil
    "12/10", // Nossa Senhora Aparecida
    "02/11", // Finados
    "15/11", // Proclamação da República
    "25/12", // Natal
  ];

  const { date } = today();
  return hollydays.includes(date);
}

function birthdate() {
  const birthdate = getBirthdate();
  const { date } = today();

  if (date === birthdate) {
    outputEvent(`Hardcode Mode: Aniversário`);
  }
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

function verifyBirthDate() {
  if (window.localStorage.getItem("birthdate")) {
    return;
  }

  const birthdate = prompt(
    "Digite sua data de aniversário para configurar o hardcore mode (ex: 21/08/2000)"
  );

  if (!birthdate || birthdate.length < 10) {
    alert("Data inválida");
    verifyBirthDate();
  }

  const splitedBirthdate = birthdate.split("/");
  const formatedBirthDate = `${splitedBirthdate[0]}/${splitedBirthdate[1]}`;

  window.localStorage.setItem("birthdate", formatedBirthDate);
  return;
}

function getBirthdate() {
  return window.localStorage.getItem("birthdate");
}
