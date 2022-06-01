// retrieving data from json
function getData(){
    return data = {
        name: "Ivan",
        secondName: "Ivanov",
        patronymic: "Ivanovich",
        emails: ["some@mail.com", "another@mail.com"],
        phoneNumbers: ["(999) 121 2212", "(909) 090 9090"],
        position: "developer",
        dateOfBirth: "11.11.1991",
        profilePicture: "some-dude.svg",
        skype: "mySkype"
    }
}

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