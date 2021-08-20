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

//const locations = document.getElementsByName("location"); 
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

// Fonction qui va check les informations renseignées (et afficher les messages d'erreurs si besoin)

function inputsCheck() {

  let validForm;
  let validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if ((first.value.length >= 2) & (first.value != "")) {

    return validForm = true;
  } 

  firstError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  firstError.style.color = "red";
  firstError.style.fontSize = "15px";
  
  if ((last.value.length >= 2) & (last.value != "")) {

    return validForm = true;
  }

  lastError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  lastError.style.color = "red";
  lastError.style.fontSize = "15px";

  if (email.value.match(validMail)) {

    return validForm = true;
  }

  emailError.textContent = "Veuillez renseigner une adresse email valide."
  emailError.style.color = "red";
  emailError.style.fontSize = "15px";

  /* if ((isNaN(quantity.value)) || (quantity.value == "")) {

    quantityError.textContent = "Veuillez renseigner un nombre valide."
    quantityError.style.color = "red";
    quantityError.style.fontSize = "15px";
    
  } else {
    return validForm = true;
  } */ 

  if ((document.getElementById("location1").checked) || (document.getElementById("location2").checked) || (document.getElementById("location3").checked)
   || (document.getElementById("location4").checked) || (document.getElementById("location5").checked) || (document.getElementById("location6").checked)) {

    return validForm = true;
  }
  locationError.textContent = "Veuillez selectionner une ville."
  locationError.style.color = "red";
  locationError.style.fontSize = "15px";

  if (condition.checked) {
    
    return validForm = true;
  }

  conditionError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions."
  conditionError.style.color = "red";
  conditionError.style.fontSize = "15px";

  return validForm = false;
}

inputsCheck();


/*
// Ckeck si les données du formulaire sont valides
function validationFirstName() {

  if ((first.value.length >= 2) & (first.value != "")) {

    return true;
  } 

  return false;
}

function validationLastName() {

  if ((last.value.length >= 2) & (last.value != "")) {

    return true;
  } 

  return false; 
}

function validationEmail() {
  let validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.match(validMail)) {
    
    return true;
  } 
  
  return false;
}


function validationQty() {
  console.log(quantity.value);
  if ((isNaN(quantity.value)) || (quantity.value == "")) {

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
*/



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalHide.forEach((btn) => btn.addEventListener("click", closeModal));






