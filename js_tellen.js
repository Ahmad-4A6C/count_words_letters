document.getElementById("woorden").addEventListener("keyup", tellen);

function tellen() {
	
	var ingevoerdeTekst = document.getElementById("woorden").value;
	
	document.getElementById("resultaat").innerHTML = "Teskt is: "+ ingevoerdeTekst;
	
	document.getElementById("resultaat").innerHTML += "<br>Aantal letters: " + ingevoerdeTekst.length;
	
	var space = ingevoerdeTekst.split(" ").length;
	document.getElementById("resultaat").innerHTML += "<br> Aantal woorden: " + space;
}
function toUpperCase() {
 	var ingevoerdeTekst = document.getElementById("woorden").value;

	document.getElementById("resultaat").innerHTML += "<br> Tekst is veranderd naar: "+ (ingevoerdeTekst.toUpperCase());
}