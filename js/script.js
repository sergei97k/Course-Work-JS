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

let resultDateCalculation;





// functions that are working :)
const handleSubmit = (event) => {
  event.preventDefault();
  resultDateCalculation = durationBetweenDates();
  resultOfCalculation.textContent = ` result: ${resultDateCalculation}`;
  // calculateWeekend();// here is the call for the weekend selector function
  // console.log(resultDateCalculation)

};
const addAWeek = () => {

  let start = new Date(startDate.value).getTime();
  let end = new Date(start + 604800000);


  let endYear = end.getFullYear();
  let endMonth = end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : `${end.getMonth() + 1}`;
  let endDay = end.getDate() < 10 ? `0${end.getDate()}` : `${end.getDate()}`;


  endDate.value = `${endYear}-${endMonth}-${endDay}`;

};
const addAnMonth = () => {
  let start = new Date(startDate.value).getTime();
  let end = new Date(start + 2629743000);

  let endYear = end.getFullYear();
  let endMonth = end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : `${end.getMonth() + 1}`;
  let endDay = end.getDate() < 10 ? `0${end.getDate()}` : `${end.getDate()}`;

  endDate.value = `${endYear}-${endMonth}-${endDay}`;
}

const validationOfEndDate = () => {

  let temporaryDifference = new Date (endDate.value) - new Date (startDate.value);
  if (startDate.value === "") {
    alert("please enter the start date first");
    form.reset();
    startDate.focus();
  }else if(temporaryDifference < 0){
    alert("start date should be smaller than end date");
    form.reset();
    startDate.focus();
  }

};

function durationBetweenDates(){

  let start = startDate.value;
  let end = endDate.value;
  let unit = selectUnit.value;

  let difference = Math.abs(new Date (end) - new Date (start)); 

  switch (unit){

      case "seconds" : return `${Math.floor(difference / 1000)} ${unit}`;

      case "minutes" : return `${Math.floor(difference / 60000)} ${unit}`;

      case "hours" : return `${Math.floor(difference / 3600000)} ${unit}`;

      case "day" :  
          let amountDays = Math.floor(difference / 86400000);
          let unitDays = amountDays > 1 ? "days" : "day";

          return `${amountDays} ${unitDays}`;
       
         


  }
};





// // Event Listeners
form.addEventListener("submit", handleSubmit);
endDate.addEventListener("change", validationOfEndDate);
plusWeek.addEventListener("click", addAWeek);
plusMonth.addEventListener("click", addAnMonth);





// // functions still in process
// const calculateWeekend = (resultDateCalculation) => {

// switch (selectWeekend.value){
//   case "all-days" : return resultDateCalculation;

//   case "working-days": return 
//   }
// };












