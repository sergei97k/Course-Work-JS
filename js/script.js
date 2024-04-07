"use strict"

// DOM variables

let form = document.querySelector(".form")
let startDate = document.querySelector(".start_date");
let endDate = document.querySelector(".end_date");
let selectWeekend = document.querySelector(".select_days");
let selectUnit = document.querySelector(".select_unit");
let resultOfCalculation = document.querySelector(".result");

let resultDateCalculation;


// // functions still in process
const calculateWeekend = () => {
console.log(selectWeekend.value)
}

// functions that are working :)
const handleSubmit = (event) => {
  event.preventDefault();
  resultDateCalculation = durationBetweenDates();
  resultOfCalculation.textContent = ` result: ${resultDateCalculation}`;
  calculateWeekend();// here is the call for the weekend selector function

};


// // Event Listeners
form.addEventListener("submit", handleSubmit);


// function that generally works, but not now..




  function durationBetweenDates(){

  let start = startDate.value;
  let end = endDate.value;
  let unit = selectUnit.value;

  let difference = Math.abs(new Date (end) - new Date (start)); 

  switch (unit){

      case "second" : return `${Math.floor(difference / 1000)} ${unit}`

      case "minute" : return `${Math.floor(difference / 60000)} ${unit}`;

      case "hour" : return `${Math.floor(difference / 3600000)} ${unit}`;

      case "day" :  
          let amountDays = Math.floor(difference / 86400000);
          let unitDays = amountDays > 1 ? "days" : "day";

          return `${amountDays} ${unitDays}`;
       
         


  }
};










