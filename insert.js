(function() {
	var app = document.createElement("script");
	app.src = chrome.extension.getURL("app.js");
	app.async = true;
	app.addEventListener("load", function() { app.parentNode.removeChild(app); });
	document.body.appendChild(app);
})();