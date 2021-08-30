"use strict";

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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

const locations = document.getElementsByName("location"); 
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
    validFormLastName = true;
    return true;
  } 
  
  lastError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  lastError.style.color = "red";
  lastError.style.fontSize = "15px";
  validFormLastName = false;
  return false; 
}

function validationEmail(e) {
  
  let value = e.target.value;
  let validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value.match(validMail)) {
    
    emailError.textContent = "";
    validFormEmail = true;
    return true;
  } 
  
  emailError.textContent = "Veuillez entrer une adresse e-mail valide.";
  emailError.style.color = "red";
  emailError.style.fontSize = "15px";
  validFormEmail = false;
  return false; 
}

function validationBirthDate() {
  // Create a date variable which stores the current day at 00:00 local time.
  let today = new Date();
  today.setHours(0,0,0,0);

  // Parse the input date in the default format.
  let birthInput = new Date(birthdate.value);

  if (birthInput <= today) {
    
    birthdateError.textContent = "";
    validFormBirthDate = true;
  	return true;
  } 
  
  birthdateError.textContent = "Veuillez entrer une date de naissance valide.";
  birthdateError.style.color = "red";
  birthdateError.style.fontSize = "15px";
  validFormBirthDate = false;
  return false;
}

function validationQty(e) {
  
  let value = e.target.value;

  if ((isNaN(value)) || (value == "")) {
    
    quantityError.textContent = "Veuillez entrer une valeur numérique.";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "15px";
    validFormQuantity = false;
    return false;
  } 
  
  quantityError.textContent = "";
  validFormQuantity = true;
  return true;
}

function validationButton() {
  
  if ((document.getElementById("location1").checked) || (document.getElementById("location2").checked) || (document.getElementById("location3").checked)
    || (document.getElementById("location4").checked) || (document.getElementById("location5").checked) || (document.getElementById("location6").checked)) {
    
    locationError.textContent = "";
    validFormLocation = true;
    return true;
  } 
  
  locationError.textContent = "Vous devez choisir une option.";
  locationError.style.color = "red";
  locationError.style.fontSize = "15px";
  validFormLocation = false;
  return false;
}

function validationCondition() {

  if (condition.checked) {
    
    conditionError.textContent = "";
    validFormCondition = true;
    return true;
  } 
  
  conditionError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
  conditionError.style.color = "red";
  conditionError.style.fontSize = "15px";
  validFormCondition = false;
  return false;
}

// Hide success message by default
success.style.display = "none";
// Function displaying the success message
function isValid() {
  console.log("isValid");
  form.style.display = "none"; 
  success.style.fontSize = "30px";
  success.style.textAlign = "center";
  success.style.display = "flex";
}

// function submit validation
function validate() {

  if ((validFormFirstName == true) && (validFormLastName == true) && (validFormEmail == true) && (validFormBirthDate == true) && (validFormQuantity == true) && (validFormLocation == true) && (validFormCondition == true)) {
    isValid();
  }
}


// When exiting the text field, start the function.
first.addEventListener('change', validationFirstName);
last.addEventListener('change', validationLastName);
email.addEventListener('change', validationEmail);
birthdate.addEventListener("change", validationBirthDate);
quantity.addEventListener('change', validationQty);
validationButton();
condition.addEventListener('change', validationCondition);


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalHide.forEach((btn) => btn.addEventListener("click", closeModal));






