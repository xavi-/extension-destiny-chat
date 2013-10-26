(function(window, document) {
	if(!/twitch\.tv\/destiny\b/.test(window.location)) { return; }

	var spinner = document.getElementById("chat_loading_spinner");
	spinner.parentNode.removeChild(spinner);

	document.getElementById("twitch_chat").innerHTML =
		'<iframe style="border:none;width:100%;height:100%;" src="http://destiny.gg/embed/chat"/>';
})(window, document);