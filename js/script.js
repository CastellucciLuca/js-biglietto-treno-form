const km = document.querySelector("input#kilometres");

const age = document.querySelector("input#age");

const button = document.querySelector("button")

//BUTTON CLICK
button.addEventListener ("click", function (){
	console.log (km.value)
    console.log (age.value)
})