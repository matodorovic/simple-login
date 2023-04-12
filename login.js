import { validatePassword, validateUsername } from "./src/JS/emptyFields.js";

const loginBtn = document.querySelector("#login-btn");
const emptyPass = document.querySelector("#validate-password");
const emptyUser = document.querySelector("#validate-username");

const inputUser = document.querySelector("#username");
const inputPass = document.querySelector("#password");

inputPass.addEventListener("keyup", () => {
  emptyPass.innerHTML = "";
});

inputUser.addEventListener("keyup", () => {
  emptyUser.innerHTML = "";
});

loginBtn.addEventListener("click", (ev) => {
  ev.preventDefault();

  let username = inputUser.value;
  let password = inputPass.value;

  emptyPass.innerHTML = "";
  emptyUser.innerHTML = "";

  validateUsername(username);
  validatePassword(password);

  if (validateUsername(username) && validatePassword(password)) {

    const loginObj = {};

    loginObj.username = username;
    loginObj.password = password;

    console.log(loginObj);

    let clearForm = document.querySelector("#login-form");
    let clearP = document.querySelector("#not-member");

    clearForm.innerHTML = "";
    clearP.innerHTML = "";

    let title = document.querySelector("#login-title");

    title.innerHTML = `Hej, ${username}`;

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
