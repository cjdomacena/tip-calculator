const billAmount = document.querySelector(".bill");
const numPeople = document.querySelector('#people-count');
const customTip = document.querySelector('#custom-tip');

// Display
const tipTotal = document.querySelector('#tip-amount');
const total = document.querySelector('#total');
const tip = document.querySelectorAll('.tip-percent');


let tipPercent;
let numPerson;
let bill;


const custom = document.getElementById("custom-tip")

custom.addEventListener("focusin", () =>
{

		custom.placeholder = "";
	

})

custom.addEventListener("focusout", () =>
{
	
	
		custom.placeholder = "Custom";
	
})


numPeople.addEventListener('input', () => {

	if (!numPeople.value) {
		total.textContent = "0.00"
	}
	numPerson = numPeople.value;
	displayData(bill, tipPercent, numPerson);
})




tip.forEach((item) => {

		// I just saw a version with ternary operator. This is for my own clarity.
	if (document.querySelector('.is_active')) {
		document.querySelector('.is_active').classList.toggle('is_active');
	}

	item.addEventListener("click", (e) => {
	
		e.currentTarget.classList.toggle("is_active");
		
		tipPercent = (+parseInt(e.currentTarget.textContent) )/ 100;
		console.log(tipPercent);
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



function displayData(bill, tipAmount,numPerson)
{
	if(bill && tipAmount && numPerson)
	{

		let billTotal = parseFloat(bill) + (tipAmount * bill);
		let  perPerson = billTotal / numPerson;
		perPerson = parseFloat(perPerson).toFixed(2);
		let tipPerPerson = parseFloat((tipAmount * bill) / numPerson).toFixed(2);
		
		tipTotal.textContent = tipPerPerson;
		total.textContent = parseFloat(perPerson).toFixed(2);
		
	}
}




// todo:
/*
 * Calculate tip amount
 * Calculate total amount per person
 *  Should check if three values is not empty
 *  
 *  
 * 
 * 
 * 
*/ 