"use strict";

var billAmount = document.querySelector(".bill");
var numPeople = document.querySelector('#people-count');
var customTip = document.querySelector('#custom-tip'); // Display

var tipTotal = document.querySelector('#tip-amount');
var total = document.querySelector('#total');
var tip = document.querySelectorAll('.tip-percent'); // Reset button

var reset = document.querySelector("#reset");
var tipPercent;
var numPerson;
var bill;
reset.addEventListener("click", function () {
  billAmount.value = 0;
  numPeople.value = 0;
  tipTotal.value = 0;
  tipTotal.textContent = "0.00";
  total.textContent = "0.00";
  customTip.value = "";

  if (document.querySelector(".is_active")) {
    document.querySelector(".is_active").classList.remove("is_active");
  }

  tipPercent = 0;
  numPerson = 0;
  bill = 0;
});
billAmount.addEventListener("input", function () {
  if (billAmount.value <= 0) {
    document.querySelector("#bill-input").classList.add("form-error");
  } else {
    document.querySelector("#bill-input").classList.add("form-active");
    document.querySelector("#bill-input").classList.remove("form-error");
    bill = billAmount.value;
    displayData(bill, tipPercent, numPerson);
  }
});
numPeople.addEventListener('input', function () {
  if (!numPeople.value) {
    total.textContent = "0.00";
  } else {
    if (numPeople.value == 0) {
      document.querySelector(".error-people").style.display = 'block';
      document.querySelector(".people-input").classList.add("form-error");
    } else {
      document.querySelector(".error-people").style.display = 'none';
      document.querySelector(".people-input").classList.remove("form-error");
      document.querySelector(".people-input").classList.add('form-active');
      numPerson = numPeople.value;
      displayData(bill, tipPercent, numPerson);
    }
  }
});
billAmount.addEventListener("focusout", function () {
  document.querySelector("#bill-input").classList.remove("form-active");
});
numPeople.addEventListener("focusout", function () {
  document.querySelector(".people-input").classList.remove("form-active");
});
tip.forEach(function (item) {
  if (document.querySelector('.is_active')) {
    document.querySelector('.is_active').classList.toggle('is_active');
  }

  item.addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("is_active");
    tipPercent = +parseInt(e.currentTarget.textContent) / 100;
    displayData(bill, tipPercent, numPerson);
  });
});
customTip.addEventListener("input", function () {
  if (document.querySelector('.is_active')) {
    document.querySelector('.is_active').classList.toggle('is_active');
  }

  tipPercent = customTip.value / 100;
  displayData(bill, tipPercent, numPerson);
});

function displayData(bill, tipAmount, numPerson) {
  if (bill && tipAmount && numPerson) {
    var billTotal = parseFloat(bill) + tipAmount * bill;
    var perPerson = billTotal / numPerson;
    perPerson = parseFloat(perPerson).toFixed(2);
    var tipPerPerson = parseFloat(tipAmount * bill / numPerson).toFixed(2);
    tipTotal.textContent = tipPerPerson;
    total.textContent = parseFloat(perPerson).toFixed(2);
    tipTotal.textContent = tipPerPerson;
    total.textContent = parseFloat(perPerson).toFixed(2);
  }
}