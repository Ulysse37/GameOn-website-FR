'use strict';

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

const success = document.getElementById("success-message");
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
const quantityError = document.getElementById("quantitytError");

const locations = document.getElementsByName("location"); 
const locationError = document.getElementById("locationError");

const condition = document.getElementById("checkbox1");
const conditionError = document.getElementById("conditionError");

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
    
    return true;
  }
  
  firstError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  firstError.style.color = "red";
  firstError.style.fontSize = "15px";
  return false;
}

function validationLastName(e) {

  let value = e.target.value;

  if ((value.length >= 2) && (value != "")) {
    //console.log("is okay");
    return true;
  } 
  //console.log("is not okay");
  lastError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  lastError.style.color = "red";
  lastError.style.fontSize = "15px";
  return false; 
}

function validationEmail(e) {
  
  let value = e.target.value;
  let validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value.match(validMail)) {
    
    return true;
  } 
  
  return false; 
}

function validationBirthDate() {
  // Create a date variable which stores the current day at 00:00 local time.
  let today = new Date();
  today.setHours(0,0,0,0);

  // Parse the input date in the default format.
  let birthInput = new Date(birthdate.value);

  if (birthInput <= today) {
    
  	return true;
  } 
  
  return false;
}

function validationQty(e) {
  
  let value = e.target.value;

  if ((isNaN(value)) || (value == "")) {
    
    return false;
  } 
  
  return true;
}

function validationButton() {
  
  if ((document.getElementById("location1").checked) || (document.getElementById("location2").checked) || (document.getElementById("location3").checked)
    || (document.getElementById("location4").checked) || (document.getElementById("location5").checked) || (document.getElementById("location6").checked)) {
    
    return true;
  } 
  
  return false;
}

function validationCondition() {

  if (condition.checked) {
    
    return true;
  } 
  
  return false;
}

// Function displaying the success message
function isValid() {
  // Will hide the form and display a success message 
}

// function submit validation
function validate() {
  let validForm = true;
  if (!validationFirstName()) {
    
    validInput = false
  }
  if (!validationLastName()) {

    validInput = false
  }
  if (!validationEmail()) {

    validInput = false
  }
  if (!validationBirthDate()) {

    validInput = false
  }
  if (validationQty()) {

    validInput = false
  }
  if (!validationButton()) {

    validInput = false
  }
  if (!validationCondition()) {

    validInput = false
  }
  if (validForm) {
    // Launch the isValid function
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






