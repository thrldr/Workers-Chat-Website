function validateEmail(){
    const email = $("input#email").val();
    const emailRegExp = /([a-zA-Z0-9-_]+)@([a-zA-Z0-9-_]+)\.([a-zA-Z0-9-_]+)/g;
    return email.match(emailRegExp);
}


function validatePassword(){
    const password = $("input#password").val();
    return password.length > 7;
}


function validateConfirmPassword(){
    const password = $("input#password").val();
    const passwordConfrimation = $("input#passwordConfirmation").val();

    if($('#passwordConfirmation').is(':hidden')){
        return true;
    }

    if(!password || !passwordConfrimation)
        return false;
    
    return password == passwordConfrimation;
}


function validatePosition(){
    if($('#position').is(':hidden')){
        return true;
    }
    
    if($('#position').val() === "Choose position..")
        return false;
    return true;
}


function validateForm(){
    return validatePosition() && validateConfirmPassword() && validateEmail() && validatePassword();
}
