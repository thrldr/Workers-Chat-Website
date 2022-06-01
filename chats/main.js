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

$(document).ready(function(){
    const messages = requestMessages();

    messages.forEach(message => {
        if(message.sentByOwner){
            appendSentMessage(message.text, message.time);
        }else{
            appendRecievedMessage(message.text, message.time);
        }
    });
    
    $("body").show();

    $('input').keyup(function(e){
        if(e.keyCode == 13)
        {
            sendMessageIfNotEmpty()
        }
    });

    $("button").click(function(){
        sendMessageIfNotEmpty()
    })
})