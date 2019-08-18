$(function() {
	if (sessionStorage.api) {
		$("#sess").text("Redirecting to Host Website....");
		setTimeout(function() {window.location.href = sessionStorage.redirectUrl;}, 2000);
	}
	else{
		$("#sess").text("Error 404 : Page Not Found");
		$("#loadingImg").hide();
	}
})