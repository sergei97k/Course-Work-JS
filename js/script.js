"use strict"

// DOM variables


let startDate = document.querySelector(".start_date");
let endDate = document.querySelector(".end_date");
let resultOfCalculation = document.querySelector(".result")



// functions

const handleStartDate = (event) =>{
 console.log(event.target.value)

 

}
const handleEndDate = (event) =>{
    console.log(event.target.value)
  
  }
// Event Listeners
startDate.addEventListener("change", handleStartDate);
endDate.addEventListener("change", handleEndDate);


