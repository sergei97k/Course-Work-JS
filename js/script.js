"use strict";

// DOM variables

let form = document.querySelector(".form");
let startDate = document.querySelector(".start_date");
let plusWeek = document.querySelector(".plus_week");
let plusMonth = document.querySelector(".plus_month");
let endDate = document.querySelector(".end_date");
let selectWeekend = document.querySelector(".select_days");
let selectUnit = document.querySelector(".select_unit");
let resultOfCalculation = document.querySelector(".result");

const handleSubmit = (event) => {
  event.preventDefault();

  let resultDateCalculation = durationBetweenDates(
    startDate.value,
    endDate.value,
    selectUnit.value
  );
  resultOfCalculation.textContent = ` result: ${resultDateCalculation}`;
};

const handleStartInput = () => {
  endDate.setAttribute("min", startDate.value);
  endDate.disabled = false;
};

const handleEndInput = () => {
  startDate.setAttribute("max", endDate.value);
};

// Module: date.js
function durationBetweenDates(start, end, unit) {
  let difference = Math.floor(Math.abs(new Date(end) - new Date(start)));

  switch (unit) {
    case "seconds":
      return `${Math.floor(difference / 1000)} ${unit}`;

    case "minutes":
      return `${Math.floor(difference / 60000)} ${unit}`;

    case "hours":
      return `${Math.floor(difference / 3600000)} ${unit}`;

    case "day":
      let amountDays = Math.floor(difference / 86400000);
      let unitDays = amountDays === 1 ? "day" : "days";

      return `${amountDays} ${unitDays}`;
  }
}

// // Event Listeners
form.addEventListener("submit", handleSubmit);
startDate.addEventListener("change", handleStartInput);
endDate.addEventListener("change", handleEndInput);
