require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let destination = document.getElementById("missionTarget");
    destination.innerHTML = ` 
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name} </li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`;
 }
 //validates whether it's an empty string. Otherwise checks if it's a number.
 function validateInput(testInput) {
   if(testInput === ""){
    return "Empty";
   } else if(!isNaN(testInput)){
    return "Is a Number";
   } else {
    return "Not a Number";
   }
 }
//function validates form items and then applies status changes
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//alert for empty forms
    if(validateInput(pilot) === "Empty"  || validateInput(copilot) === "Empty" 
        || validateInput(fuelLevel) === "Empty"  || validateInput(cargoLevel) === "Empty"){
        alert("Please fill out all necessary forms");
    }

//alert if incorrect input in forms
    if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"
    || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("Fill out the correct type for forms");
    }
//function that changes status to not ready items
    let redLight = function (){
        list.style = "visibility: visible";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatus").style.color = "red";
    };
//function that changes status to ready items
    let greenLight = function(){
        list.style = "visibility: visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    };
//conditionals checking fuel and cargo levels
    if (fuelLevel >= 10000 && cargoLevel <= 10000){
        greenLight();
    } else {
        if(fuelLevel < 10000){
            redLight();
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        } else {
            redLight();
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }
        if(cargoLevel < 10000){ 
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        } else {
            redLight();
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        }
    }
 }
//fetch for planets
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            let planets = response.json();
            return planets;
        })
    return planetsReturned;
};
//function that selects random planet and returns selectedPlanet
 function pickPlanet(planets) {
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