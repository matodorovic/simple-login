import {
  validateName,
  validatePassword,
  validateUsername,
} from "./src/JS/emptyFields.js";
import validateEmail from "./src/JS/validateEmail.js";

const inputPass = document.querySelector("#create-password");
const signupBtn = document.querySelector("#signup-btn");
const inputName = document.querySelector("#name");
const inputLogin = document.querySelector("#login");
const inputUser = document.querySelector("#username");

const emptyPass = document.querySelector("#validate-password");
const emptyName = document.querySelector("#validate-name");
const emptyEmail = document.querySelector("#validate-email");
const emptyUser = document.querySelector("#validate-username");

function containsUppercase(str) {
  if (/[A-Z]/.test(str)) {
    return true;
  } else {
    return false;
  }
}

inputName.addEventListener("keyup", () => {
  emptyName.innerHTML = "";
});

inputUser.addEventListener("keyup", () => {
  emptyUser.innerHTML = "";
});

inputLogin.addEventListener("keyup", () => {
  emptyEmail.innerHTML = "";
});

inputPass.addEventListener("keyup", () => {
  let passwordIndicator = document.querySelector("#password-indicator");
  emptyPass.innerHTML = "";

  if (inputPass.value == "") {
    passwordIndicator.innerHTML = "";
  } else {
    if (inputPass.value.length < 5) {
      passwordIndicator.innerHTML = "svagt";
      passwordIndicator.classList.add("text-red-400");
    } else if (
      (inputPass.value.length >= 5 && inputPass.value.length <= 8) ||
      (inputPass.value.length == 5 && containsUppercase(inputPass.value))
    ) {
      passwordIndicator.innerHTML = "medium";
      passwordIndicator.classList.remove("text-red-400");
      passwordIndicator.classList.add("text-amber-500");
    } else {
      passwordIndicator.innerHTML = "starkt";
      passwordIndicator.classList.remove("text-amber-500");
      passwordIndicator.classList.add("text-green-500");
    }
  }
});

signupBtn.addEventListener("click", (ev) => {
  ev.preventDefault();

  let login = inputLogin.value;
  let password = inputPass.value;
  let name = inputName.value;
  let username = inputUser.value;

  emptyPass.innerHTML = "";
  emptyName.innerHTML = "";
  emptyEmail.innerHTML = "";
  emptyUser.innerHTML = "";

  validateEmail(login);
  validatePassword(password);
  validateName(name);
  validateUsername(username);

  if (
    validateEmail(login) &&
    validatePassword(password) &&
    validateName(name) &&
    validateUsername(username)
  ) {
    const person = {};

    person.name = name;
    person.username = username;
    person.email = login;
    person.password = password;

    console.log(person);

    let clearForm = document.querySelector("#signup-form");
    let clearP = document.querySelector("#member");

    clearForm.innerHTML = "";
    clearP.innerHTML = "";

    let title = document.querySelector("#signup-title");

    title.innerHTML = `Tack att du har skapat ett konto , ${name}`;

    let formBox = document.querySelector("#login-box");
    let backBtn = document.createElement("a");

    backBtn.href = "index.html";
    backBtn.innerHTML = "Tillbaka till startsidan";
    backBtn.classList.add(
      "mt-4",
      "ml-auto",
      "bg-red-500",
      "hover:bg-red-700",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "rounded",
      "focus:outline-none",
      "focus:shadow-outline"
    );

    formBox.appendChild(backBtn);
  }
});
