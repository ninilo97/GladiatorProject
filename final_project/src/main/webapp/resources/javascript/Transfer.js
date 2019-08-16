$(function() {
	var toAccNo;
	var amount;

	var obj = {
		accNo : sessionStorage.accNo
	}
	$.ajax({
		url : 'getPayeeList.lti',
		method : 'POST',
		data : JSON.stringify(obj),
		contentType : 'application/json',
		success : function(response) {
			$.each(response, function(index, element) {
				$('#toAccNo').append(
						$("<option></option>").attr("value", element.payaccno).text(element.payname));
			})
		}
	})

	$("#toAccNo").blur(function() {
		toAccNo = $(this).val();
		if (toAccNo == null) {
			$(this).addClass("error");
			$(this).val("Select Name");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#toAccNo").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
	});

	$("#amount").blur(function() {
		var reg = /^[0-9]+$/
		amount = $(this).val();
		if (amount == "" || !reg.test(amount)) {
			$(this).addClass("error");
			$(this).val("Invalid Amount");
		} else if (amount.length > 20) {
			$(this).addClass("error");
			$(this).val("Max length Exceeded");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#amount").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(amount);
	});

	$("#reset").click(function(evt) {
		evt.preventDefault();
		$("#toAccNo").val("");
		$("#amount").val("");
	})

	$("#inlineBtn").click(function(evt) {
		evt.preventDefault();

		window.location.href = 'Payee.html';
	});

	if (sessionStorage.accNo == undefined) {
		$("#sess").text("Session ended... Redirecting to Login....");
		window.location.href = "Login.html";
	}

	$("#transfer").click(function(evt) {
		evt.preventDefault();
		
		var obj = {
			fromAccNo : sessionStorage.accNo,
			toAccNo : $("#toAccNo").val(),
			amount : $("#amount").val()
		}
		$.ajax({
			url : 'transfer.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				if (response == true) {
					$("#sess").removeClass("error");
					$("#sess").text("Transfer Successful. Redirecting to Dashboard");
					setTimeout(function() { window.location.href = "Dashboard.html"; }, 1500);
				}
				else{
					$("#sess").addClass("error");
					$("#sess").text("Account balance low. Try again.");
				}
			}
		})
	})

	$("#accLogout").click(function(evt) {
		evt.preventDefault();
		sessionStorage.clear();
		window.location.href = "Login.html";
	});
})
