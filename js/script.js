const km = document.getElementById("input#kilometres");

const age = document.getElementById("input#age");

const button = document.getElementById("invia");

//BUTTON CLICK
button.addEventListener ("click", function (){
	console.log (km.value)
    console.log (age.value)
})