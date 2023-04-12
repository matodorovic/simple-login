export function validatePassword(pass) {
  let validPass = document.querySelector("#validate-password");
  if (pass === "") {
    validPass.innerHTML = "Fyll i fältet";
    return false;
  } else if (pass.length < 4) {
    validPass.innerHTML = "Lösenordet är for kort. Min. 4 tecken";
    return false;
  } else {
    return true;
  }
}

export function validateName(name) {
  let validName = document.querySelector("#validate-name");
  if (name === "") {
    validName.innerHTML = "Fyll i fältet";
    return false;
  } else {
    return true;
  }
}

export function validateUsername(username) {
  let validUser = document.querySelector("#validate-username");
  if (username === "") {
    validUser.innerHTML = "Fyll i fältet";
    return false;
  } else {
    return true;
  }
}
