$(document).ready(function(){

    $("#signup").click(function(){
        $("#signup").hide();
        $("#submit").text("Sign up");
        $("#please").text("Please sign up");
        $("#forgot-password").hide();
        $("#position").show();
        $("div.passwordConfirmation").show();
        $(this).blur();
    })

    $("#forgot-password").click(function(){
        $("#signup").hide();
        $("#submit").text("Change password");
        $("#please").text("Enter new password");
        $("label#password").text("New password");
        $("#forgot-password").hide();
        $("#email").hide();
        $("div.passwordConfirmation").show();
    })

    $("form").submit(function(event){
        if(!validateForm()){
            event.preventDefault();
            renderValidationData();
            $("#submit").blur();
        }
    })

    $("input#email").change(function(){
        renderEmailValidation();
    })
    $("input#password").change(function(){
        renderPasswordValidation();
    })
    $("input#passwordConfirmation").change(function(){
        renderConfirmPasswordValidation();
    })
    $("select#position").change(function(){
        renderPositionValidation();
    })
})
