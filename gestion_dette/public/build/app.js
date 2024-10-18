(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
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
var toggleSwitch = document.getElementById("toggleSwitch");
var formUser = document.getElementById("userSwitch");
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
  var parent = input.parentElement;
  var small = parent.querySelector("small");
  parent.className = "input-groupe error";
  small.innerText = message;
}
//
function showSuccess(input) {
  var parent = input.parentElement;
  parent.className = "input-groupe success";
}
//
// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }
//-----------------------------Validité email-------------------
function isValidEmail(input) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_regexp_test_js-node_modules_core-js_modules_es_string-f20c1b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSCxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLE9BQU8sRUFBRTtJQUNoRFUsU0FBUyxDQUFDVixLQUFLLEVBQUUsaUNBQWlDLENBQUM7RUFDckQsQ0FBQyxNQUFNLElBQUlHLFdBQVcsQ0FBQ0gsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxPQUFPLEVBQUU7SUFDaERVLFNBQVMsQ0FBQ1YsS0FBSyxFQUFFLGtDQUFrQyxDQUFDO0VBQ3RELENBQUMsTUFBTTtJQUNMa0IsV0FBVyxDQUFDbEIsS0FBSyxDQUFDO0VBQ3BCO0FBQ0Y7O0FBRUE7QUFDQSxTQUFTdUIsU0FBU0EsQ0FBQ3ZCLEtBQUssRUFBRTtFQUN4QixJQUFJRCxPQUFPLENBQUNDLEtBQUssQ0FBQyxFQUFFO0lBQ2xCVSxTQUFTLENBQUNWLEtBQUssRUFBRSwwQkFBMEIsQ0FBQztFQUM5QyxDQUFDLE1BQU0sSUFBSSxDQUFDbUIsWUFBWSxDQUFDbkIsS0FBSyxDQUFDLEVBQUU7SUFDL0JVLFNBQVMsQ0FBQ1YsS0FBSyxFQUFFLGNBQWMsQ0FBQztFQUNsQyxDQUFDLE1BQU07SUFDTGtCLFdBQVcsQ0FBQ2xCLEtBQUssQ0FBQztFQUNwQjtBQUNGO0FBRUF3QixJQUFJLENBQUMzQixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVTRCLENBQUMsRUFBRTtFQUMzQ0YsU0FBUyxDQUFDRyxLQUFLLENBQUM7RUFDaEJKLGFBQWEsQ0FBQ0ssUUFBUSxDQUFDO0FBQ3pCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbi8vIGltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cbi8vIGVuYWJsZSB0aGUgaW50ZXJhY3RpdmUgVUkgY29tcG9uZW50cyBmcm9tIEZsb3diaXRlXG4vLyBpbXBvcnQgJ2Zsb3diaXRlJztcblxuY29uc29sZS5sb2coXCJhcHAuanMgZXN0IGNoYXJnw6lcIik7XG5jb25zdCB0b2dnbGVTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVN3aXRjaFwiKTtcbmNvbnN0IGZvcm1Vc2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyU3dpdGNoXCIpO1xuZm9ybVVzZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG50b2dnbGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICBmb3JtVXNlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2Uge1xuICAgIGZvcm1Vc2VyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGlzRW1wdHkoaW5wdXQpIHtcbiAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0xlbmd0aChpbnB1dCwgbWluLCBtYXgpIHtcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA8IG1pbikge1xuICAgIHJldHVybiBcInBldGl0XCI7XG4gIH0gZWxzZSBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gbWF4KSB7XG4gICAgcmV0dXJuIFwiZ3JhbmRcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJib25cIjtcbiAgfVxufVxuLy9cbmZ1bmN0aW9uIHBhc3N3b3Jkc01hdGNoKGlucHV0MSwgaW5wdXQyKSB7XG4gIGlmIChpbnB1dDEudmFsdWUudHJpbSgpICE9PSBpbnB1dDIudmFsdWUudHJpbSgpKSB7XG4gICAgc2hvd0Vycm9yKGlucHV0MiwgXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2ghXCIpO1xuICB9XG59XG4vL1xuZnVuY3Rpb24gc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XG4gIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IHNtYWxsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCJzbWFsbFwiKTtcbiAgcGFyZW50LmNsYXNzTmFtZSA9IFwiaW5wdXQtZ3JvdXBlIGVycm9yXCI7XG4gIHNtYWxsLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG59XG4vL1xuZnVuY3Rpb24gc2hvd1N1Y2Nlc3MoaW5wdXQpIHtcbiAgY29uc3QgcGFyZW50ID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgcGFyZW50LmNsYXNzTmFtZSA9IFwiaW5wdXQtZ3JvdXBlIHN1Y2Nlc3NcIjtcbn1cbi8vXG4vLyBmdW5jdGlvbiBnZXRGaWVsZE5hbWUoaW5wdXQpIHtcbi8vICAgcmV0dXJuIGlucHV0LmlkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuaWQuc2xpY2UoMSk7XG4vLyB9XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVmFsaWRpdMOpIGVtYWlsLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGlucHV0KSB7XG4gIGNvbnN0IGVtYWlsUGF0dGVybiA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Miw2fSQvO1xuICBpZiAoIWVtYWlsUGF0dGVybi50ZXN0KGlucHV0LnZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFZFUklGWSBQQVNTV09SRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGNoZWNrUGFzc3dvcmQoaW5wdXQpIHtcbiAgaWYgKGlzRW1wdHkoaW5wdXQpKSB7XG4gICAgc2hvd0Vycm9yKGlucHV0LCBcImNlIGNoYW1wIGVzdCBvYmxpZ2F0b2lyZVwiKTtcbiAgfSBlbHNlIGlmIChjaGVja0xlbmd0aChpbnB1dCwgMiwgMTApID09PSBcInBldGl0XCIpIHtcbiAgICBzaG93RXJyb3IoaW5wdXQsIFwiZG9pdCBhdm9pciBtaW5pbXVtIDYgY2FyYWN0ZXJlc1wiKTtcbiAgfSBlbHNlIGlmIChjaGVja0xlbmd0aChpbnB1dCwgMiwgMTApID09PSBcImdyYW5kXCIpIHtcbiAgICBzaG93RXJyb3IoaW5wdXQsIFwiZG9pdCBhdm9pciBtYXhpbXVtIDEwIGNhcmFjdGVyZXNcIik7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1N1Y2Nlc3MoaW5wdXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVkVSSUZZIE1BSUwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBjaGVja01haWwoaW5wdXQpIHtcbiAgaWYgKGlzRW1wdHkoaW5wdXQpKSB7XG4gICAgc2hvd0Vycm9yKGlucHV0LCBcImNlIGNoYW1wIGVzdCBvYmxpZ2F0b2lyZVwiKTtcbiAgfSBlbHNlIGlmICghaXNWYWxpZEVtYWlsKGlucHV0KSkge1xuICAgIHNob3dFcnJvcihpbnB1dCwgXCJtYWlsIGludmFsaWRcIik7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1N1Y2Nlc3MoaW5wdXQpO1xuICB9XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xuICBjaGVja01haWwobG9naW4pO1xuICBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkKTtcbn0pO1xuIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVTd2l0Y2giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybVVzZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tlZCIsImlzRW1wdHkiLCJpbnB1dCIsInZhbHVlIiwidHJpbSIsImNoZWNrTGVuZ3RoIiwibWluIiwibWF4IiwibGVuZ3RoIiwicGFzc3dvcmRzTWF0Y2giLCJpbnB1dDEiLCJpbnB1dDIiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInNtYWxsIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTmFtZSIsImlubmVyVGV4dCIsInNob3dTdWNjZXNzIiwiaXNWYWxpZEVtYWlsIiwiZW1haWxQYXR0ZXJuIiwidGVzdCIsImNoZWNrUGFzc3dvcmQiLCJjaGVja01haWwiLCJmb3JtIiwiZSIsImxvZ2luIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9