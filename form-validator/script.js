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

function checkLenght(input, min, max){
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter olmalıdır ! `)
    }else if(input.value.length > max){
        error(input, `${input.id} en fazla ${max} karakter olmalıdır ! `)
    }else{
        success(input);
    }
}

function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        error(input2, "Parolalar Eşleşmiyor");
    }
}

function checkPhone(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input, "Telefon 10 Karakterli Olmalıdır ! ");
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkRequired([username, email, password, repassword, phone]);
    checkEmail(email);
    checkLenght(username, 7, 15);
    checkLenght(password, 7, 12);
    checkPasswords(password, repassword);
    checkPhone(phone);
});