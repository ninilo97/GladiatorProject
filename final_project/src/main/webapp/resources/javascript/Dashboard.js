$(function() {
	var pass;
	var cpass;
	var txPass;
	var ctxPass;
	var chk;
	
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
		window.location.href = "Home.html";
	});

	$("#payee").click(function(evt) {
		evt.preventDefault();
		window.location.href = "Payee.html";
	});

	$("#pass").blur(function() {
		var reg = /(?=^.{8,16}$)(?=(?:.*?\d){1})(?=.*[a-z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$/
		pass = $(this).val();
		if (pass == "" || !reg.test(pass)) {
			$(this).addClass("error");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#pass").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
	});

	$("#cpass").blur(function() {
		cpass = $(this).val();
		if (pass == "" || pass != cpass) {
			$(this).addClass("error");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#cpass").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
	});

	$("#txPass").blur(function() {
		var reg = /^[0-9]{4}$/
		txPass = $(this).val();
		if (txPass == "" || !reg.test(txPass)) {
			$(this).addClass("error");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#txPass").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(txPass);
	});

	$("#ctxPass").blur(function() {
		ctxPass = $(this).val();
		if (ctxPass == "" || ctxPass != txPass) {
			$(this).addClass("error");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#ctxPass").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
	});

	$("#chk").click(function() {
		var flag1 = $(this).parent().parent().find(".idle").val();
		var flag2 = $(this).parent().parent().find(".error").val();
		chk = false;
		if (flag1 === undefined && (flag2 === undefined || flag2 === "")) {
			chk = true;
		} else {
			chk = false;
		}
	})

	$("#changeForm").click(function(evt) {
		evt.preventDefault();
		if (chk == false)
			return false;
		
		var obj = {
			pass : $("#pass").val(),
			txPass : $("#txPass").val(),
			accNo : sessionStorage.accNo
		}
		alert(obj);
		$.ajax({
			url : 'OAccount.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				if (response == true) {
					$("#sess").text("Passwords updated.");
				} else {
					$("#sess").text("Something went wrong. Try again later.");
				}
			}
		})
	});

	$("#fundTransfer").click(function(evt) {
		evt.preventDefault();
		window.location.href = "Transfer.html";
	});
})
