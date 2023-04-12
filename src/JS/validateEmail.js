export default function validateEmail(mail) {
    let validEmail = document.querySelector("#validate-email");
    validEmail.innerHTML = "";
  
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (mail === "") {
      validEmail.innerHTML = "Fyll i fältet";
    } else if (regEx.test(mail)) {
      return true;
    } else {
      validEmail.innerHTML = "Ogiltig email. Godkänd format: namn@exempel.se";
      return false;
    }
  }