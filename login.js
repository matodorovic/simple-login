const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;

    const loginObj = {};

    loginObj.email = login;
    loginObj.password = password;
    
    console.log(loginObj); 

    
    let clearForm = document.querySelector('#login-form');
    let clearP = document.querySelector('#not-member');

    clearForm.innerHTML='';
    clearP.innerHTML='';
    
    let title = document.querySelector('#login-title');

    title.innerHTML= `Välkommen, ${login}`;
   
    
})

 