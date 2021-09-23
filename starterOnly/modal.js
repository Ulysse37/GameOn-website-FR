"use strict";

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalHide = document.querySelectorAll(".close");

const success = document.getElementById("successMessage");
const form = document.getElementById("reserve");

// const qui vont chercher les input à tester ainsi que leurs error
const first = document.getElementById("first");
const firstError = document.getElementById("firstError");

const last = document.getElementById("last");
const lastError = document.getElementById("lastError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");

const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");

const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const locationError = document.getElementById("locationError");

const condition = document.getElementById("checkbox1");
const conditionError = document.getElementById("conditionError");

let validFormFirstName = false;
let validFormLastName = false;
let validFormEmail = false;
let validFormBirthDate = false;
let validFormQuantity = false;
let validFormLocation = false;
let validFormCondition = false;

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Checking if each text field is valid.
function validationFirstName(e) { 
  
  let value = e.target.value;

  if((value.length >= 2) && (value != "")) {
    firstError.textContent = "";

    return validFormFirstName = true;
  }
  firstError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  firstError.style.color = "red";
  firstError.style.fontSize = "15px";

  return validFormFirstName = false;
}

function validationLastName(e) {

  let value = e.target.value;

  if ((value.length >= 2) && (value != "")) {
    lastError.textContent = "";

    return validFormLastName = true;
  } 
  lastError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  lastError.style.color = "red";
  lastError.style.fontSize = "15px";

  return validFormLastName = false;
}

function validationEmail(e) {
  
  let value = e.target.value;
  let validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value.match(validMail)) {
    emailError.textContent = "";

    return validFormEmail = true;
  } 
  emailError.textContent = "Veuillez entrer une adresse e-mail valide.";
  emailError.style.color = "red";
  emailError.style.fontSize = "15px";

  return validFormEmail = false;
}

function validationBirthDate() {
  // Create a date variable which stores the current day at 00:00 local time.
  let today = new Date();
  today.setHours(0,0,0,0);
  // Parse the input date in the default format.
  let birthInput = new Date(birthdate.value);

  if (birthInput <= today) {
    birthdateError.textContent = "";

  	return validFormBirthDate = true;
  } 
  birthdateError.textContent = "Veuillez entrer une date de naissance valide.";
  birthdateError.style.color = "red";
  birthdateError.style.fontSize = "15px";

  return validFormBirthDate = false;
}

function validationQty(e) {
  
  let value = e.target.value;

  if ((isNaN(value)) || (value == "")) {
    quantityError.textContent = "Veuillez entrer une valeur numérique.";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "15px";

    return validFormQuantity = false;
  } 
  quantityError.textContent = "";

  return validFormQuantity = true;
}

function validationButton() {
  
  if ((document.getElementById("location1").checked) || (document.getElementById("location2").checked) || (document.getElementById("location3").checked)
    || (document.getElementById("location4").checked) || (document.getElementById("location5").checked) || (document.getElementById("location6").checked)) {

    locationError.textContent = "";

    return validFormLocation = true;
  } 
  locationError.textContent = "Vous devez choisir une option.";
  locationError.style.color = "red";
  locationError.style.fontSize = "15px";

  return validFormLocation = false;
}

function validationCondition() {

  if (condition.checked) {
    conditionError.textContent = "";

    return validFormCondition = true;
  } 
  conditionError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
  conditionError.style.color = "red";
  conditionError.style.fontSize = "15px";
  
  return validFormCondition = false;
}

// Hide success message by default
success.style.display = "none";
// Function displaying the success message
function isValid() {
  form.style.display = "none"; 
  success.style.fontSize = "30px";
  success.style.textAlign = "center";
  success.style.display = "block";
}

// function submit validation
function validate() {
  event.preventDefault();
  let validForm = validFormFirstName && validFormLastName && validFormEmail && validFormBirthDate && validFormQuantity && validFormLocation && validFormCondition;
  
  if (validForm) {
    isValid();
  }
  validationBirthDate();
  validationButton();
  validationCondition();
}

// When exiting the text field, start the function.
first.addEventListener('change', validationFirstName);
last.addEventListener('change', validationLastName);
email.addEventListener('change', validationEmail);
birthdate.addEventListener("change", validationBirthDate);
quantity.addEventListener('change', validationQty);
location1.addEventListener('change', validationButton);
location2.addEventListener('change', validationButton);
location3.addEventListener('change', validationButton);
location4.addEventListener('change', validationButton);
location5.addEventListener('change', validationButton);
location6.addEventListener('change', validationButton);
condition.addEventListener('change', validationCondition);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalHide.forEach((btn) => btn.addEventListener("click", closeModal));
