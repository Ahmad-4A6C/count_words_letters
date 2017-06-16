document.getElementById("woorden").addEventListener("keyup", tellen);

function tellen() {
	
	var ingevoerdeTekst = document.getElementById("woorden").value;
	var letters = ingevoerdeTekst.split("");
	var woorden = ingevoerdeTekst.split(" ");
	
	var lgth = 0;
	var longest;
	
	for(var i=0; i < woorden.length; i++){
		if(woorden[i].length > lgth){
			var lgth = woorden[i].length;
			longest = woorden[i];
		}
    }
	
	document.getElementById("resultaat").innerHTML = "Teskt is: "+ ingevoerdeTekst;
	document.getElementById("resultaat").innerHTML += "<br> Aantal woorden: " + woorden.length;
	document.getElementById("resultaat").innerHTML += "<br>Aantal letters: " + letters.length;
	document.getElementById("resultaat").innerHTML += "<br> Langste woord: "+ longest;
	
}


	
function toUpperCase() {
 	var ingevoerdeTekst = document.getElementById("woorden").value;

	document.getElementById("resultaat").innerHTML += "<br> Tekst is veranderd naar: "+ (ingevoerdeTekst.toUpperCase());
}