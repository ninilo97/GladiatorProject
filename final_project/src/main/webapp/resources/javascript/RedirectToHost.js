$(function() {
	if (sessionStorage.api) {
		$("#sess").text("Redirecting to Host Website....");
		var urlRedirect = sessionStorage.redirectUrl;
		sessionStorage.clear();
		setTimeout(function() {window.location.href = urlRedirect;}, 5000);
	}
	else{
		$("#sess").text("Error 404 : Page Not Found");
		$("#loadingImg").hide();
	}
})