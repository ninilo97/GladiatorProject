$(function() {
	if (sessionStorage.accNo == undefined) {
		$("#sess").text("Session ended... Redirecting to Login....");
		window.location.href = "Login.html";
	}

	$("#accDetails").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$("#accDetailsD").removeClass("hidden");
	});

	$("#accSumm").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$("#accSummD").removeClass("hidden");
	});

	$("#accStatement").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$("#accStatementD").removeClass("hidden");
	});

	$("#accTransfer").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$("#accTransferD").removeClass("hidden");
	});

	$("#accPass").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$("#accPassD").removeClass("hidden");
	});

	$("#accLogout").click(function(evt) {
		evt.preventDefault();
		sessionStorage.clear();
		window.location.href = "Login.html";
	});

	$("#payee").click(function(evt) {
		evt.preventDefault();
		window.location.href = "Payee.html";
	});

	$("#fundTransfer").click(function(evt) {
		evt.preventDefault();
		window.location.href = "Transfer.html";
	});
})
