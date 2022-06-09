$(document).ready(function(){
    data = getData();
    $("#short-name").text(data.name + " " + data.secondName);
    $("#full-name").text(data.name + " " + data.secondName + " " + data.patronymic);
    $("#email").text(data.emails.join(', '));
    $("#phone-number").text(data.phoneNumbers.join(', '));
    $("#date-of-birth").text(data.dateOfBirth);
    $("#position").text(data.position);
    $("#skype").text(data.skype);
    $("#profile-picture").attr("src", data.profilePicture);
	$("body").show();
})