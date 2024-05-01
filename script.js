//load function
window.addEventListener("load", function() {
    let listedPlanets;
    let planet;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, 
            planet.distance, planet.moons, planet.image);
    });
    init();    
});
//form submission function with button event listener
function init(){
    const status =  document.getElementById("faultyItems");
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuel = document.querySelector("input[name=fuelLevel]");
    const cargo = document.querySelector("input[name=cargoMass]");
    const button = document.getElementById("formSubmit");
   
    button.addEventListener("click", function(event){
        formSubmission(document, status, pilot.value, copilot.value, fuel.value, cargo.value);
        event.preventDefault();
    });

}
