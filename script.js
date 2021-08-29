const billAmount = document.querySelector(".bill");
const numPeople = document.querySelector('#people-count');
const customTip = document.querySelector('#custom-tip');

// Display
const tipTotal = document.querySelector('#tip-amount');
const total = document.querySelector('#total');
const tip = document.querySelectorAll('.tip-percent');

// Reset button
const reset = document.querySelector("#reset");



let tipPercent;
let numPerson;
let bill;



reset.addEventListener("click", () =>
{
	billAmount.value = 0;
	numPeople.value = 0;
	tipTotal.value = 0;
	tipTotal.textContent = "0.00"
	total.textContent = "0.00"
	customTip.value = "";


	if(document.querySelector(".is_active"))
	{
		document.querySelector(".is_active").classList.remove("is_active");
	}

	tipPercent = 0;
	numPerson = 0;
	bill = 0;
})




billAmount.addEventListener("input", () => {

	if (billAmount.value <= 0) {
		document.querySelector("#bill-input").classList.add("form-error");
	}
	else {
		document.querySelector("#bill-input").classList.add("form-active"); document.querySelector("#bill-input").classList.remove("form-error");
		bill = billAmount.value;
		displayData(bill, tipPercent, numPerson);
	}

})


numPeople.addEventListener('input', () => {

	if (!numPeople.value) {
		total.textContent = "0.00"
	}
	else {
		if (numPeople.value == 0) {
			document.querySelector(".error-people").style.display = 'block';
			document.querySelector(".people-input").classList.add("form-error");
		}
		else {
			document.querySelector(".error-people").style.display = 'none';
			document.querySelector(".people-input").classList.remove("form-error");
			document.querySelector(".people-input").classList.add('form-active');
			numPerson = numPeople.value;
			displayData(bill, tipPercent, numPerson);
		}
	}


})

billAmount.addEventListener("focusout", () => {
	document.querySelector("#bill-input").classList.remove("form-active");
})

numPeople.addEventListener("focusout", () => {
	document.querySelector(".people-input").classList.remove("form-active");
})




tip.forEach((item) => {

	if (document.querySelector('.is_active')) {
		document.querySelector('.is_active').classList.toggle('is_active');
	}

	item.addEventListener("click", (e) => {

		e.currentTarget.classList.toggle("is_active");

		tipPercent = (+parseInt(e.currentTarget.textContent)) / 100;
		displayData(bill, tipPercent, numPerson);
	})
})

customTip.addEventListener("input", () => {
	if (document.querySelector('.is_active')) {
		document.querySelector('.is_active').classList.toggle('is_active');
	}
	tipPercent = customTip.value / 100;

	displayData(bill, tipPercent, numPerson);
})



function displayData(bill, tipAmount, numPerson) {
	if (bill && tipAmount && numPerson) {

		let billTotal = parseFloat(bill) + (tipAmount * bill);
		let perPerson = billTotal / numPerson;
		perPerson = parseFloat(perPerson).toFixed(2);
		let tipPerPerson = parseFloat((tipAmount * bill) / numPerson).toFixed(2);

		tipTotal.textContent = tipPerPerson;
		total.textContent = parseFloat(perPerson).toFixed(2);

		tipTotal.textContent = tipPerPerson;
		total.textContent = parseFloat(perPerson).toFixed(2);
	}}


