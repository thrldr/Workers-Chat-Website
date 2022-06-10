function appendSentMessage(text, time){
    $("#chat-start").after(`<div class="container message darker">
    <p class="text-end">` + text + `</p>
    <span class="time-left">` + time + `</span>
</div>`)
}

function appendRecievedMessage(text, time){
    $("#chat-start").after(
        `<div class="container message">
            <p class="text-start">` + text + `</p>
            <span class="time-right">` + time + `</span>
        </div>`)
}

function prependRecievedMessage(text, time){
    $("#chat-end").after(
        `<div class="container message">
            <p class="text-end">` + text + `</p>
            <span class="time-left">` + time + `</span>
        </div>`)
}

function prependSentMessage(text, time){
    $("#chat-end").after(`<div class="container message darker">
        <p class="text-end">` + text + `</p>
        <span class="time-left">` + time + `</span>
    </div>`)
}

function renderMessages(messages){
    console.log(messages);
    for(let message of messages){
        if(message.sentByOwner){
            appendSentMessage(message.text, message.time);
        }else{
            appendRecievedMessage(message.text, message.time);
        }
    }
}

function getFormattedCurrentTime(){
    const currentDateTime = new Date($.now());
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();

    currentTime = hours > 9 ? hours : '0' + hours;
    currentTime += ":";
    currentTime += minutes > 9 ? minutes : '0' + minutes;
    return currentTime;
}

function sendMessageIfNotEmpty(){
    if($("input").val()){
        appendSentMessage(
            $("input").val(),
            getFormattedCurrentTime()
        );
        $("input").val('');
    }
}