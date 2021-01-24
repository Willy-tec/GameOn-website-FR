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

const closeBtn = document.querySelector(".close");
const inputFirst = document.querySelector("#first")
const inputLast = document.querySelector("#last")
const inputMail = document.querySelector("#email")
const inputQuantity = document.querySelector("#quantity")
const checkBox = document.querySelectorAll('[name="location"]')
const inputAgree = document.querySelector("#checkbox1")
const inputBirth = document.querySelector("#birthdate")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//launch the close modal event
closeBtn.addEventListener("click", closeModal)

//close the modal when click on close button(x)
function closeModal(){
  modalbg.style.display = "none";
}
;

//those variable are used for verifying the validity of the form
let isValidFirst = false,
    isValidLast = false,
    isValidMail = false,
    isValidQuantity = false,
    isValidCheck = false,
    isValidBirthDate = false,
    isAgree = inputAgree.checked;


// Error string for the text print when we have an error. You just need to change the text here, for changing every where else.
const errorStr = {
  first : "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  last : "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  mail : "Veuillez entrer une adresse email valide.",
  quantity : "Veuillez entrer une quantité valide.",
  checkBox: "Veuillez cochez une case.",
  agree: "Vous devez accepter les conditions d'utilisation.",
  birth: "Vous devez saisir une date valide"
}

//function for validating the submit form. We test each variable, and send back the boolean response.
const validate = function(){
let isValidFirst = inputFirst.value.length>=3? true: false,
    isValidLast = inputLast.value.length>=3? true: false,
    isValidMail = inputMail.value.length>=2? true: false,
    isValidQuantity = inputQuantity.value.length>0,
    isValidCheck = false,
    isValidBirthDate = inputBirth.value != "" ? true : false,
    isAgree = inputAgree.checked;
console.log(inputBirth.value)
    //we test every checkbox, and if only one is true, so the validCheck is set to true.
    checkBox.forEach(elt => {if(elt.checked)isValidCheck = true;});

    if(!isValidFirst) errorMsg(inputFirst, errorStr.first);
      else removeError(inputFirst);
    if(!isValidLast) errorMsg(inputLast, errorStr.last);
      else removeError(inputLast);
    if(!isValidMail) errorMsg(inputMail, errorStr.mail);
      else removeError(inputMail);
    if(!isValidQuantity) errorMsg(inputQuantity, errorStr.quantity);
      else removeError(inputQuantity)
    if(!isValidCheck) errorMsg(checkBox[0], errorStr.checkBox);
      else removeError(checkBox[0])
    if(!isAgree) errorMsg(inputAgree, errorStr.agree);
      else removeError(inputAgree)
    if(!isValidBirthDate) errorMsg(inputBirth, errorStr.birth);
      else removeError(inputBirth)
return (isValidFirst && isValidLast && isValidMail && isValidQuantity && isValidBirthDate&& isValidCheck &&isAgree);
}

// the function set the attribute for the error message to be print
function errorMsg(elt, txt){

  elt.parentNode.setAttribute("data-error-visible", "true");
  elt.parentNode.setAttribute("data-error", txt);
}

// the function remove the attribute for the error message to be clear
function removeError(elt){
  elt.parentNode.removeAttribute("data-error");
    elt.parentNode.removeAttribute("data-error-visible");
}