const password = document.querySelector('#create-password');
password.addEventListener('keyup', () => {
    let passwordIndicator = document.querySelector('#password-indicator');
    let indicatorStrength = document.createElement("small");

        indicatorStrength.innerHTML = '';
        passwordIndicator.appendChild(indicatorStrength);

    if (password.value.length < 5 && containsUppercase(password)) {

        indicatorStrength.innerHTML = 'svagt';
        passwordIndicator.appendChild(indicatorStrength);
        
    } else if (password.value.length < 8 && containsUppercase(password)) {

        indicatorStrength.innerHTML = 'medium';
        passwordIndicator.appendChild(indicatorStrength);
      
    } else {

        indicatorStrength.innerHTML = 'starkt';
        passwordIndicator.appendChild(indicatorStrength);
        
    }

    

});

function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }



    






const signupBtn = document.querySelector('#signup-btn');

signupBtn.addEventListener('click', () => {
    ev.preventDefault();

    let login = document.querySelector('#login').value;
    let password = document.querySelector('#create-password').value;
    let name = document.querySelector('#name').value;

    const person = {};

    person.name = name;
    person.email = login;
    person.password = password;
    
    console.log(loginObj); 

/*    
    let clearForm = document.querySelector('#signup-form');
    let clearP = document.querySelector('#member');

    clearForm.innerHTML='';
    clearP.innerHTML='';
    
    let title = document.querySelector('#signup-title');

    title.innerHTML= `Tack att du har skapat ett konto , ${name}`; */

} );