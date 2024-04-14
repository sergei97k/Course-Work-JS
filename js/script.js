"use strict"

// DOM variables

let form = document.querySelector(".form")
let startDate = document.querySelector(".start_date");
let plusWeek = document.querySelector(".plus_week");
let plusMonth = document.querySelector(".plus_month");
let endDate = document.querySelector(".end_date");
let selectWeekend = document.querySelector(".select_days");
let selectUnit = document.querySelector(".select_unit");
let resultOfCalculation = document.querySelector(".result");


// Just global variables
let resultDateCalculation;
let startValue;
let endValue;
let weekendValue = selectWeekend.value;
let unitValue = selectUnit.value;
let arrayOfDates = [];
let daysToCount;


// Function of pushing date to array
const createArrayOfDays = () => {
  arrayOfDates = [];
  let differenceInDays = Math.floor(Math.abs(new Date (endValue) - new Date (startValue)) / 86400000);

  let startDay = new Date (startValue);
 
  for (let i = 0; i <= differenceInDays; i++){
    
    arrayOfDates.push(startDay.toDateString());
    startDay.setDate(startDay.getDate() + 1);
  }
};
const calculateWeekend = () => {
  let arrayOfDaysToCount = [];

  if (weekendValue === "weekend"){
    
    arrayOfDaysToCount = arrayOfDates.filter((date) => {
      let dayOfWeekend = new Date(date).getDay();
      return dayOfWeekend === 0 || dayOfWeekend === 6;

    })
  } else if (weekendValue === "working-days"){
    
    arrayOfDaysToCount = arrayOfDates.filter((date) => {
      let dayOfWork = new Date(date).getDay();
      return dayOfWork !== 0 && dayOfWork !== 6;
     
    })
   
  } else {
    arrayOfDaysToCount = arrayOfDates
  }
  daysToCount = arrayOfDaysToCount.length
};

const handleWeekendSelect = () => {
  weekendValue = selectWeekend.value;

};

// functions that are working :)
const handleSubmit = (event) => {
  event.preventDefault();
  calculateWeekend();
  resultDateCalculation = durationBetweenDates(unitValue);
  resultOfCalculation.textContent = ` result: ${resultDateCalculation}`;

};

const handleStartInput = () => {
  startValue = startDate.value;
  endDate.setAttribute("min", `${startValue}`);
  createArrayOfDays();

};

const handleEndInput = () => {

   if (startDate.value === "") {
      alert("please enter the start date first");
      form.reset();
      startDate.focus();
  } else {
    endValue = endDate.value;
    startDate.setAttribute("max", `${endValue}`)
   
  }
  createArrayOfDays();
 

};
const handleUnitSelect = () => {
  unitValue = selectUnit.value;

};


function durationBetweenDates(unit){

  let difference = daysToCount * 86400000

  switch (unit){

      case "seconds" : return `${Math.floor(difference / 1000)} ${unit}`;

      case "minutes" : return `${Math.floor(difference / 60000)} ${unit}`;

      case "hours" : return `${Math.floor(difference / 3600000)} ${unit}`;

      case "day" :  
          let amountDays = Math.floor(difference / 86400000);
          let unitDays = amountDays === 1 ? "day" : "days"

          return `${amountDays} ${unitDays}`;
  }
};



// // Event Listeners
form.addEventListener("submit", handleSubmit);
startDate.addEventListener("change", handleStartInput);
endDate.addEventListener("change", handleEndInput);
selectWeekend.addEventListener("change", handleWeekendSelect);
selectUnit.addEventListener("change", handleUnitSelect);
















