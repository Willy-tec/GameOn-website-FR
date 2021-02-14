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
const inputFirst = document.querySelector("#first");
const inputLast = document.querySelector("#last");
const inputMail = document.querySelector("#email");
const inputQuantity = document.querySelector("#quantity");
const checkBox = document.querySelectorAll('[name="location"]');
const inputAgree = document.querySelector("#checkbox1");
const inputBirth = document.querySelector("#birthdate");
const timer = 100000;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

//launch the close modal event
closeBtn.addEventListener("click", closeModal)

//close the modal when click on close button(x)
function closeModal() {
	modalbg.style.display = "none";
}

// Error string for the text print when we have an error. You just need to change the text here, for changing every where else.
const errorStr = {
	first: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
	last: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
	mail: "Veuillez entrer une adresse email valide.",
	quantity: "Veuillez entrer une quantité valide.",
	checkBox: "Veuillez cochez une case.",
	agree: "Vous devez accepter les conditions d'utilisation.",
	birth: "Vous devez saisir une date valide"
}

//function for validating the submit form. We test each variable, and send back the boolean response.
function validate(e) {

	// we use the ternary operator, and test the input field.
	// if input >= 2 => remove the error msg, and set isValid to true, else if input <2 => print the error message, and set isValid to false.
	let isValidFirst = inputFirst.value.length >= 2 ? removeError(inputFirst) : errorMsg(inputFirst, errorStr.first),
		isValidLast = inputLast.value.length >= 2 ? removeError(inputLast) : errorMsg(inputLast, errorStr.last),
		isValidMail = inputMail.value.length >= 2 ? removeError(inputMail) : errorMsg(inputMail, errorStr.mail),
		isValidQuantity = inputQuantity.value.length > 0 ? removeError(inputQuantity) : errorMsg(inputQuantity, errorStr.quantity),
		isValidBirthDate = inputBirth.value != "" ? removeError(inputBirth) : errorMsg(inputBirth, errorStr.birth),
		isAgree = inputAgree.checked ? removeError(inputAgree) : errorMsg(inputAgree, errorStr.agree);

	//we test every checkbox, and if only one is true, so the validCheck is set to true.
	//and print an error message, or clear it.
	let isValidCheck = false;
	checkBox.forEach(elt => {
		if (elt.checked) isValidCheck = true;
	});

	if (!isValidCheck) errorMsg(checkBox[0], errorStr.checkBox);
	else removeError(checkBox[0])

	// we combine every boolean with an AND operator, and if only one is set to false, all the operation is false.
	let validation = isValidFirst && isValidLast && isValidMail && isValidQuantity && isValidBirthDate && isValidCheck && isAgree

	//we print the validation message, and wait for the final click for submit the data
	if (validation) {
		document.querySelector(".success").style.display = "block";
		document.querySelector("form").style.display = "none";
		setInterval(() => document.querySelector("form").submit(), 3000)
		window.addEventListener('click', () => document.querySelector("form").submit())
	}
	return false
}

// the function set the attribute for the error message to be print
function errorMsg(elt, txt) {
	elt.parentNode.setAttribute("data-error-visible", "true");
	elt.parentNode.setAttribute("data-error", txt);
	return false;
}

// the function remove the attribute for the error message to be clear
function removeError(elt) {
	elt.parentNode.removeAttribute("data-error");
	elt.parentNode.removeAttribute("data-error-visible");
	return true;
}