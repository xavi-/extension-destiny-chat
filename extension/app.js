(function(window, document) {
	if(!/twitch\.tv\/destiny\b/.test(window.location)) { return; }

	document.getElementById("chat").innerHTML =
		'<iframe style="border:none;width:100%;height:100%;" src="http://destiny.gg/embed/chat"/>'
	;
})(window, document);