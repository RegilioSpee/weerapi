"use strict"; //opt-out of "sloppy mode"
const debug = true; //debuggen
//bind HTML elemant via  DOM
let weatherButton = document.getElementById('weatherButton')//bind via DOM
let weatherButton2 = document.getElementById('weatherButton2')//bind via DOM
let weatherTickerTape = document.getElementById('weatherTickerTape')//bind via DOM
let weatherHere = document.getElementById('weatherHere')//bind via DOM
let completeWeatherHere = document.getElementById('completeWeatherHere')//bind via DOM
weatherButton.addEventListener('click', getWeather);
weatherButton2.addEventListener('click', getWeather2);

//weatherButton2.addEventListener('click' getWeather2);
//overige variabelen
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key=";//adress
let key ="demo";
//let key = "77f9e00dfd"; // key van docent
let locatie = "&locatie=";
//let geoLocation = "52.391225, 4.856799"; //longitude lattitude als locatie
let geoLocation ="Amsterdam"; // locatie als string
let url = apiAddress + key + locatie + geoLocation;//haal hier data

function getWeather(){
	weatherHere.innerHTML = "";
	makeAjaxCall(url, "GET"). then (showWeather, errorHandler);
}

function getWeather2(){
	weatherHere.innerHTML = "";
	
	makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}