function appendChat(chat){
	var messageText = "";
	if(chat.messages.length > 0){
		messageText = chat.messages[0].text;
	}

	$("#chats-list-start").after(`
		<a class="chat list-group-item list-group-item-action py-3 lh-sm">
			<div class="d-flex w-100 align-items-center justify-content-between">
			  <strong class="mb-1 name">` + chat.name + `</strong>
			  <small>Tues</small>
			</div>
			<div class="col-10 mb-1 small">` + messageText + `</div>
		</a>
`)}

function renderChats(chats){
	for(var i = chats.length - 1; i >= 0; i--)
	{
		appendChat(chats[i]);
	}
	if(chats.length > 0){
		$("#chats-list-start").next('.chat').addClass('active');
	}
}