// Write your JavaScript code here!
//listeners created in this doc

// const { validateInput, formSubmission } = require("./scriptHelper");
window.addEventListener("load", function() {
    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    // })
    init();    
});
function init(){
    const status =  document.getElementById("launchStatusCheck");
    const pilot = document.getElementById("pilotName");
    const copilot = document.getElementById("copilotName");
    const fuel = document.getElementById("fuelLevel");
    const cargo = document.getElementById("cargoMass");
    const button = document.getElementById("formSubmit");
   
    button.addEventListener("click", function(){
        formSubmission(document, status, pilot, copilot, fuel, cargo);
        event.preventDefault();
    });

}
