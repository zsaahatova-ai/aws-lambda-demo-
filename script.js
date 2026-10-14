
const clock = document.getElementById("clock");
const today = document.getElementById("today");
const runButton = document.getElementById("runButton");
const statusText = document.getElementById("statusText");
const statusDescription = document.getElementById("statusDescription");
const consoleOutput = document.getElementById("consoleOutput");

function updateClock() {
  const now = new Date();

  clock.textContent = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  today.textContent = now.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

// Обновляем время каждую секунду
updateClock();
setInterval(updateClock, 1000);

// Запуск демонстрационной функции
runButton.addEventListener("click", function () {
  const now = new Date();

  const result = {
    statusCode: 200,
    status: "SUCCESS",
    message: "Привет, Жаннур! LambdaLab успешно выполнил функцию.",
    service: "LambdaLab",
    function: "greeting",
    time: now.toLocaleTimeString("ru-RU"),
    date: now.toLocaleDateString("ru-RU")
  };

  statusText.textContent = "Успешно!";
  statusText.classList.add("success");
  statusDescription.textContent = "Функция выполнена без ошибок";

  consoleOutput.innerHTML = "";

  const title = document.createElement("p");
  title.className = "console-success";
  title.textContent = "✓ Функция успешно выполнена!";

  const greeting = document.createElement("p");
  greeting.className = "console-data";
  greeting.textContent = result.message;

  const response = document.createElement("p");
  response.textContent = "statusCode: " + result.statusCode;

  const service = document.createElement("p");
  service.textContent = "service: " + result.service;

  const functionName = document.createElement("p");
  functionName.textContent = "function: " + result.function;

  const time = document.createElement("p");
  time.textContent = "time: " + result.time;

  const date = document.createElement("p");
  date.textContent = "date: " + result.date;

  consoleOutput.append(
    title,
    greeting,
    response,
    service,
    functionName,
    time,
    date
  );

  console.log("LambdaLab result:", result);
});
