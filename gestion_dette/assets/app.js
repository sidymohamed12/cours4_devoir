/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// start the Stimulus application
// import './bootstrap';

// enable the interactive UI components from Flowbite
// import 'flowbite';

console.log("app.js est chargé");
const toggleSwitch = document.getElementById("toggleSwitch");
const formUser = document.getElementById("userSwitch");
formUser.style.display = "none";

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    formUser.style.display = "block";
  } else {
    formUser.style.display = "none";
  }
});

function isEmpty(input) {
  if (input.value.trim() === "") {
    return true;
  } else {
    return false;
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    return "petit";
  } else if (input.value.length > max) {
    return "grand";
  } else {
    return "bon";
  }
}
//
function passwordsMatch(input1, input2) {
  if (input1.value.trim() !== input2.value.trim()) {
    showError(input2, "Passwords don't match!");
  }
}
//
function showError(input, message) {
  const parent = input.parentElement;
  const small = parent.querySelector("small");
  parent.className = "input-groupe error";
  small.innerText = message;
}
//
function showSuccess(input) {
  const parent = input.parentElement;
  parent.className = "input-groupe success";
}
//
// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }
//-----------------------------Validité email-------------------
function isValidEmail(input) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(input.value)) {
    return false;
  } else {
    return true;
  }
}

// ------------------------- VERIFY PASSWORD ------------------------------
function checkPassword(input) {
  if (isEmpty(input)) {
    showError(input, "ce champ est obligatoire");
  } else if (checkLength(input, 2, 10) === "petit") {
    showError(input, "doit avoir minimum 6 caracteres");
  } else if (checkLength(input, 2, 10) === "grand") {
    showError(input, "doit avoir maximum 10 caracteres");
  } else {
    showSuccess(input);
  }
}

// ------------------------- VERIFY MAIL ------------------------------
function checkMail(input) {
  if (isEmpty(input)) {
    showError(input, "ce champ est obligatoire");
  } else if (!isValidEmail(input)) {
    showError(input, "mail invalid");
  } else {
    showSuccess(input);
  }
}

form.addEventListener("submit", function (e) {
  checkMail(login);
  checkPassword(password);
});
