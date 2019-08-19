$(function() {
	var pass;
	var cpass;
	var txPass;
	var ctxPass;
	var chk;
	
	if (sessionStorage.accNo == undefined) {
		$("#sess").text("Session ended... Redirecting to Login....");
		window.location.href = "Home.html";
	}

	$("#accSumm").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$('div[class="dummy"]').addClass("hidden");
		$("#accSummD").removeClass("hidden");

		var obj = {
			accNo : sessionStorage.accNo
		}
		
		$.ajax({
			url : 'OAccountReturn.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				$("#accSummD1").text("Welcome "+response.firstName);
				$("#accSummD2").text("Account Number "+sessionStorage.accNo);
				$("#accSummD3").text("Current Balance is "+response.balance);
				var obj = {
						accNo : sessionStorage.accNo
				}
				$.ajax({
					url : 'OAccountTx.lti',
					method : 'POST',
					data : JSON.stringify(obj),
					contentType : 'application/json',
					success : function(response) {
						$('#txTable tbody').empty();
						var count = 1;
						$.each(response, function(index, element) {
							if(count>5) return false;
							$('<tr>').append(
									$('<td class="tdDesc">').text(element.txDetails),
									$('<td class="tdDesc">').text(element.txAmount),
									$('<td class="tdDesc">').text(element.txbal)
									).appendTo('#txTable tbody');
							count++;
						})
					}
				})
			}
		})
	});

	$("#accSumm").click();

	$("#accDetails").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$('div[class="dummy"]').addClass("hidden");
		$("#accDetailsD").removeClass("hidden");
	});

	$("#accStatement").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$('div[class="dummy"]').addClass("hidden");
		$("#accStatementD").removeClass("hidden");
	});

	$("#accTransfer").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$('div[class="dummy"]').addClass("hidden");
		$("#accTransferD").removeClass("hidden");
	});

	$("#accPass").click(function(evt) {
		evt.preventDefault();
		$(this).parent().parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$('div[class="container"]').addClass("hidden");
		$('div[class="dummy"]').addClass("hidden");
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
		$.ajax({
			url : 'OAccountUpdate.lti',
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
	
	var date1;
	var date2;
	var chk;
	
	$("#date1").blur(function() {
		date1 = $(this).val();
		if (date1 == "") {
			$(this).addClass("error");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#date1").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
	});
	
	$("#date2").blur(function() {
		date2 = $(this).val();
		if (date2 == "") {
			$(this).addClass("error");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#date2").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
	});

	$("#chk").click(function(){
		date1 = $(this).val();
		date2 = $(this).val();
		if(date1>date2){
			$("#sess").text()
			return false;
		}
		
		var flag1 = $(this).parent().parent().find(".idle").val();
		var flag2 = $(this).parent().parent().find(".error").val();
		chk=false;
		if(flag1===undefined && flag2===undefined){
			chk=true;
		}
		else{
			chk=false;
		}
	})
	
	$("#chk").click(function(){
		if(chk == false) return false;
		
	})
});
