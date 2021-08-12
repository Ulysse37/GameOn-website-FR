// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalHide = document.querySelectorAll(".close");
// const qui vont chercher les input à tester
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
// const location = document.getElementByName("location"); -> bloque tout le site
const condition = document.getElementById("checkbox1");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Ckeck si les données du formulaire sont valides
function validationPrenom() {

  if ((first.value.length >= 2) & (first.value != "")) {

    return true;
  } 

  return false;
}

function validationNom() {

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


//console.log(quantity.value);
function validationQté() {

  if ((isNaN(quantity.value)) & (quantity.value == "")) {

    return false;
  } 

  return true;
}
//console.log(validationQté());

function validationBouton() {

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



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalHide.forEach((btn) => btn.addEventListener("click", closeModal));






