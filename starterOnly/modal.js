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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalHide.forEach((btn) => btn.addEventListener("click", closeModal));

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
  if ((first.length >= 2) & (first != "")) {
  return true;
  } else {
    return false;
  }
}

function validationNom() {
  if ((last.length >= 2) & (last != "")) {
  return true;
  } else {
    return false;
  }
}

function validationEmail() {
  let validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.match(validMail)) {
    return true;
  } else {
    return false;
  }
}

function validationQté() {
  if (isNaN(quantity)) {
    return false;
  } else {
    return true;
  }
}

function validationBouton() {
  if (document.getElementsByName("location").checked) {
    return true;
  } else {
    return false;
  }
}

function validationCondition() {
  if (document.getElementById("checkbox1").checked) {
    return true;
  } else {
    return false;
  }
}