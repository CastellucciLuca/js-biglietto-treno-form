const km = document.getElementById("kilometres");

const age = document.getElementById("age");

const button = document.getElementById("invia");

let calcPrice;

let discountAge = 0;

let discountGeneral;

//BUTTON CLICK
button.addEventListener ("click", function () {
	console.log (parseInt(km.value));
    console.log (parseInt(age.value));

    calcPrice = km.value * 0.2762;

    if (age.value < 18 ) {
        discountAge = (calcPrice * 17.5 / 100);
    } else if (age.value >= 65){
        discountAge = (calcPrice * 33.3 / 100);
    }

    discountGeneral = (calcPrice - discountAge).toFixed(2);

    document.getElementById("price") .innerHTML = discountGeneral;
})