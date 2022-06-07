$(document).ready(function(){
    var chats = getChats();
    renderChats(chats);
    $('#chat-heading').text(chats[0].name);
    renderMessages(chats[0].messages);
    $("body").show();

    // handle enter key
    $('input').keyup(function(e){
        if(e.keyCode == 13)
        {
            sendMessageIfNotEmpty()
        }
    });

    $("#send-message-button").click(function(){
        sendMessageIfNotEmpty()
    })

    $(".chat").click(function(){
        if(!$(this).hasClass('active')){
            $('.active').removeClass("active");
            $(this).addClass("active");
            $('#chat-heading').text($(this).find('.name').text());
            
            for(let chat of chats){
                if(chat.name === $(this).find('.name').text()){
                    $('#chat').children().remove('.message');
                    renderMessages(chat.messages);
                }  
            }
        }
    })
})