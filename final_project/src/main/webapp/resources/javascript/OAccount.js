$(function() {
	var accNo;
	var pass;
	var cpass;
	var txPass;
	var ctxPass;
	var chk;

	$("#accNo").blur(function() {
		var reg = /^[0-9]{0,8}$/
		accNo = $(this).val();
		if (accNo == "" || !reg.test(accNo)) {
			$(this).addClass("error");
			$(this).val("Invalid Account Number");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#accNo").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(accNo);
	});

	$("#pass")
			.blur(
					function() {
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

	$("form").submit(function(evt) {
		evt.preventDefault();
		if (chk == false)
			return false;

		var obj = {
			accNo : $("#accNo").val()
		}
		$.ajax({
			url : 'OAccountCheck.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				if (response == true) {
					var obj = {
						pass : $("#pass").val(),
						txPass : $("#txPass").val(),
						accNo : $("#accNo").val()
					}
					$.ajax({
						url : 'OAccount.lti',
						method : 'POST',
						data : JSON.stringify(obj),
						contentType : 'application/json',
						success : function(response) {
							if (response == true) {
								window.location.href = "Login.html";
							}
						}
					})
				} else {
					$("#sess").text("Account Request Pending");
				}
			}
		})
	})
})