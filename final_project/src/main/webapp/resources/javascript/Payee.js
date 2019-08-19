$(function() {
	var payname;
	var payaccno;
	var rpayaccno;
	var paynn;

	if (sessionStorage.accNo == undefined) {
		$("#sess").text("Session ended... Redirecting to Login....");
		window.location.href = "Login.html";
	}

	$("#payname").blur(function() {
		var reg = /^[a-zA-Z ]+$/
		payname = $(this).val();
		if (payname == "" || !reg.test(payname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#payname").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(payname);
	});

	$("#payaccno").blur(function() {
		var reg = /^[0-9]+$/
		payaccno = $(this).val();
		if (payaccno == "" || !reg.test(payaccno)) {
			$(this).addClass("error");
			$(this).val("Invalid  Account Number");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#payaccno").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(payaccno);
	});

	$("#rpayaccno").blur(function() {
		rpayaccno = $(this).val();
		if (rpayaccno != payaccno || rpayaccno=="") {
			$(this).addClass("error");
			$(this).val("Account Number Mismatch");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#rpayaccno").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(rpayaccno);
	});

	$("#paynn").blur(function() {
		var reg = /^[a-zA-Z]+$/
		paynn = $(this).val();
		if (paynn.length>0){
				if(!reg.test(paynn)){
					$(this).addClass("error");
					$(this).val("Invalid  Nickname");
				}
				else{
					$(this).addClass("noerror");
				}
		}
	});

	$("#paynn").focus(function() {
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(paynn);
	});

	$(".form").submit(function(evt) {
		evt.preventDefault();
		var obj = {
			accNo : sessionStorage.accNo,
			payname : $("#payname").val(),
			payaccno : $("#payaccno").val(),
			paynn : $("#paynn").val()
		}

		$.ajax({
			url : 'addPayee.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				if(response==true){
					$("#sess").text("Payee added successfully");
					setTimeout(function() { window.location.href='Dashboard.html'; }, 2000);
				}
			}
		})
	})
});
