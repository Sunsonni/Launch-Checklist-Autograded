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
//alert for empty forms
    if(validateInput(pilot) === "Empty"  || validateInput(copilot) === "Empty" 
        || validateInput(fuelLevel) === "Empty"  || validateInput(cargoLevel) === "Empty"){
        alert("Please fill out all necessary forms");
    }

//alert correct type of input for forms
    if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"
    || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Fill out the correct type for forms");
    }

    let redLight = function (){
        list.style = "visibility: visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
    };
    
    let greenLight = function(){
        list.style = "visibility: visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    };

    if (fuelLevel >= 10000 && cargoLevel <= 10000){
        greenLight();
    } else {
        if(fuelLevel < 10000){
            redLight();
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        } else {
            redLight();
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            console.log(document.getElementById("fuelStatus").innerHTML);
        }
        if(cargoLevel < 10000){ 
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        } else {
            redLight();
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        }
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            let planets = response.json();
            return planets;
        })
    return planetsReturned;
};

 

 
 function pickPlanet(planets) {
    console.log(planets);
    let randomIndex;
    let selectedPlanet;

    randomIndex = Math.floor(Math.random() * planets.length);
    selectedPlanet = planets[randomIndex];
    return selectedPlanet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;