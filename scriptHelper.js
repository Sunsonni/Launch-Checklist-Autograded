// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
   if(testInput === ""){
    return "Empty";
   } else if(!isNaN(testInput)){
    return "Is a Number";
   } else {
    return "Not a Number";
   }
 }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //utilize validateInput to complete form submission
     /*update shuttle requirements: 
         - div with id faultyItems should be updated
         - use template literals to update li elements pilotStatus and copilotStatus includes names
         - if input fuel level is too low(less than 10,000 liters) change faulty items to visible
         with updated fuel status stating not enough fuel for journey
         - Text of h2 launchStatus should change to "Shuttle not ready for launch" 
         - Color of launchStatus Test should turn red
         - if cargo mass more than 10,000 lg change lsit to visible with updated cargo status
         stating that there is too much mass for shuttle to take off.
         - text of launch status changes to "Shuttle not ready for launch"
         - text color of launchStatus should change to red
         -if shuttle ready to launch, change text of launchStatus to green and disply "Shuttle is ready for launch"
     */
//alert for empty forms
    if(validateInput(pilot.value) === "Empty"  || validateInput(copilot.value) === "Empty" 
        || validateInput(fuelLevel.value) === "Empty"  || validateInput(cargoLevel.value) === "Empty"){
        alert("Please fill out all necessary forms");
    }

//alert correct type of input for forms
    if(validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number"
    || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number"){
        alert("Fill out the correct type for forms");
    }

//
    if(fuelLevel.value < 10000){
        list.style = "visibility: visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Pilot ${copilot.value} is ready for launch`;
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    }

    if(cargoLevel.value > 10000){

    }


    let visual = document.getElementById("missionTarget");
    visual.innerHTML = `${fuelLevel.value}`

 }
 
 async function myFetch() {
    //  let planetsReturned;
 
    //  planetsReturned = await fetch().then( function(response) {
    //      });
 
    //  return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;