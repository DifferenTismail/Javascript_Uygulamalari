const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
};

function success(input){
   input.className = 'form-control is-valid';
};

function checkEmail(input){
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if(regex.test(input.value)){
        success(input);
    }else{
        error(input, "Hatalı Bir Mail Adresi")
    }
  }

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input, `${input.id} zorunludur ! `)
           }else{
            success(input);
           }
    })
   
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkRequired([username, email, password, repassword]);
    checkEmail(email);



});