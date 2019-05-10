function makeAjaxCall(url, methodType){
	let promiseObj = new Promise(function(resolve,reject){
		debug ? console.log(url) : "" ; // conditional ternary
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open(methodType, url, true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState === 4){
                if (xmlhttp.status === 200){
                    debug ? console.log("xmlhttp done succesfully") : "";
                    let serverResponse = xmlhttp.responseText // Server antwoord met string.
                    debug ? console.log(serverResponse) : ""; // debug
                    resolve(serverResponse); // Wordt via return promiseObj teruggegeven.
                } else {
                    reject (xmlhttp.status);
                    console.log("xmlhttp failed"); // debug
                }
            } else {
                debug ? console.log("xmlhttp processing going on") : "";
            }
        }
        debug ? console.log("request send succesfully") : ""; // debug
    });
    return promiseObj;
}

function errorHandler(statusCode) {
		console.log("failed with status", status)
	}
function getWeather() 
	{
		weatherHere.innerHTML="";
		makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
	}



function showWeather(weatherString){
	let weatherObject = JSON.parse(weatherString); // Convert JSON string => Object.
	let weerSelectie = "plaats: " +
		weatherObject.liveweer[0].plaats+ 
		"<br>Temperatuur: " +
		weatherObject.liveweer[0].temp + " &#176;C" +
		"<br> Gemiddelde tempratuur: "+
		weatherObject.liveweer[0].gtemp+ 
		"<br> Bewolking: "+
		weatherObject.liveweer[0].samenv+ 
		"<br> Windkracht: "+
		weatherObject.liveweer[0].windk+ 
		"<br> Zicht: "+
		weatherObject.liveweer[0].zicht+
		"<br>"
		
		weatherHere.innerHTML = weerSelectie; // String printen in de browser
}


function showWeather2(weatherString){
	let weatherObject = JSON.parse(weatherString); // Convert JSON string => Object.
		let completeData = "";
		for (const [key, value] of Object.entries(weatherObject.liveweer[0])) {
			debug ? console.log(`${key}: ${value}`) : "";
			completeData += key + " : " + value +"<br>"
			weatherHere.innerHTML = completeData;
		}
		weatherHere.innerHTML = completeData;
	}
