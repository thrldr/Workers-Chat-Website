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
        $("#submit").addClass("mt-3");
        $("#please").text("Please enter your email");
        $("div#password").hide();
        $("#forgot-password").hide();
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
        renderConfirmPasswordValidation();
    })
    $("input#passwordConfirmation").change(function(){
        renderConfirmPasswordValidation();
    })
    $("select#position").change(function(){
        renderPositionValidation();
    })
})
