function renderData(data){
    $("#name").val(data.name);
    $("#surname").val(data.secondName);
    $("#patronymic").val(data.patronymic);
    $("#email").val(data.emails.join(', '));
    $("#phone-number").val(data.phoneNumbers.join(', '));
    $("#date-of-birth").val(data.dateOfBirth);
    $("#skype").val(data.skype);
    $("#profile-picture").attr("src", data.profilePicture);
    $('#position').append($('<option>', {
        value: 1,
        text: data.position
    }));
}
