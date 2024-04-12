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
let unitValue = selectUnit.value;





// functions that are working :)
const handleSubmit = (event) => {
  event.preventDefault();
  resultDateCalculation = durationBetweenDates(startValue, endValue, unitValue);
  resultOfCalculation.textContent = ` result: ${resultDateCalculation}`;

};

const handleStartInput = () => {
  startValue = startDate.value;
  endDate.setAttribute("min", `${startValue}`);
 
  
}

const handleEndInput = () => {
   if (startDate.value === "") {
      alert("please enter the start date first");
      form.reset();
      startDate.focus();
  } else {
    endValue = endDate.value;
    startDate.setAttribute("max", `${endValue}`)
   
  }

};
const handleUnitSelect = () => {
  unitValue = selectUnit.value;
}


function durationBetweenDates(start, end, unit){

  let difference =  Math.floor(Math.abs(new Date (end) - new Date (start)));


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
selectUnit.addEventListener("change", handleUnitSelect)
















