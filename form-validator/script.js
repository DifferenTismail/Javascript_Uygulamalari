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

function validEmail(email){
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
  }

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
       error(username, 'Kullanıcı Adı Boş Geçilemez');
    }else{
        success(username);
    }

    if(email.value === ''){
        error(email, "Email Alanı Boş Geçilemez");
    }else if(!validEmail(email.value)){
     error(email, "Lütfen Düzgün Bir Mail Adresi Giriniz")   
    }
    else{
        success(email);
    }


    if(password.value === ''){
        error(password, "Şifre Alanı Boş Geçilemez");
    }else{
        success(password);
    }


    if(repassword.value === ''){
        error(repassword, "Şifre Alanaı Boş Geçilemez");
    }else{
        success(repassword);
    }

});