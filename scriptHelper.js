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
    let visual = document.getElementById("missionTarget");
    visual.innerHTML = `${validateInput(pilot.value)}`
    console.log(pilot.value);
    if(validateInput(pilot.value) === "empty"  || validateInput(copilot.value) === "empty" 
        || validateInput(fuelLevel.value) === "empty"  || validateInput(cargoLevel.value) === "empty"){
        alert("Please fill out all necessary forms");
    }

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