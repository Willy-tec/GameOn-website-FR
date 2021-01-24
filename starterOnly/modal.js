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



const validate = function(){
let isValidFirst = inputFirst.value.length>=2? true: false,
    isValidLast = inputLast.value.length>=2? true: false,
    isValidMail = inputMail.value.length>=2? true: false,
    isValidQuantity = inputQuantity.value.length>0,
    isValidCheck = false;
    checkBox.forEach(elt => {if(elt.checked)isValidCheck = true;});
    let isAgree = inputAgree.checked
console.log(isValidFirst && isValidLast && isValidMail && isValidQuantity && isValidCheck &&isAgree);
return false;
}

