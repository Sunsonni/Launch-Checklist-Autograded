// Write your JavaScript code here!
//listeners created in this doc

window.addEventListener("load", function() {
    let listedPlanets;
    let planet;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document,)
    });
    init();    
});
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.



function init(){
    const status =  document.getElementById("faultyItems");
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuel = document.querySelector("input[name=fuelLevel]");
    const cargo = document.querySelector("input[name=cargoMass]");
    const button = document.getElementById("formSubmit");
   
    button.addEventListener("click", function(){
        formSubmission(document, status, pilot.value, copilot.value, fuel.value, cargo.value);
        event.preventDefault();
    });

}
