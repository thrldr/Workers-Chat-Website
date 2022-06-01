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