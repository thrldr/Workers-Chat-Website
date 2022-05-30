function renderEmailValidation(){
    if(!validateEmail()){
        $('label#email').text('Invalid email').addClass('invalid').removeClass('valid');
    }else{
        $('label#email').text('Ok').addClass('valid');
        $("input#password").focus();
    }
}


function renderPasswordValidation(){
    if(!validatePassword()){
        $('label#password').text('Password is too short')
        $('label#password').addClass('invalid').removeClass('valid');;
    }else{
        $('label#password').text('Ok').addClass('valid'); 
    }
}


function renderConfirmPasswordValidation(){
    if(!validateConfirmPassword()){
        $('label#passwordConfirmation').text('Passwords don\'t match')
        $('label#passwordConfirmation').addClass('invalid').removeClass('valid');;
    }else{
        $('label#passwordConfirmation').text('Ok').addClass('valid'); 
    }
}


function renderPositionValidation(){
    if(!validatePosition())
        $('#position').addClass("invalid");
    else
        $('#position').removeClass("invalid");
}


function renderValidationData(){
    renderEmailValidation();
    renderPasswordValidation();
    renderConfirmPasswordValidation(); 
    renderPositionValidation();   
}