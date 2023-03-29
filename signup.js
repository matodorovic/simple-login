const password = document.querySelector('#create-password');
const signupBtn = document.querySelector('#signup-btn');

function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

password.addEventListener('keyup', () => {
    let passwordIndicator = document.querySelector('#password-indicator');
    
    if (password.value == '') {
        passwordIndicator.innerHTML = '';
    } else {

        if (password.value.length < 5) {
            passwordIndicator.innerHTML = 'svagt';
        } else if (password.value.length > 5 && password.value.length <= 8 || password.value.length == 5 && containsUppercase(password.value)) {
            passwordIndicator.innerHTML = 'medium';     
        } else {
            passwordIndicator.innerHTML = 'starkt';
        }

    }
});

signupBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    

    let login = document.querySelector('#login').value;
    let password = document.querySelector('#create-password').value;
    let name = document.querySelector('#name').value;

    const person = {};

    person.name = name;
    person.email = login;
    person.password = password;
    
    console.log(person); 

   
    let clearForm = document.querySelector('#signup-form');
    let clearP = document.querySelector('#member');

    clearForm.innerHTML='';
    clearP.innerHTML='';
    
    let title = document.querySelector('#signup-title');

    title.innerHTML= `Tack att du har skapat ett konto , ${name}`; 

} );