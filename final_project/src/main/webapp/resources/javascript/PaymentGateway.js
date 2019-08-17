$(function() {
	var otp;

	var sotp = Math.floor(100000 + Math.random() * 900000)
	var obj1 = {
		accNo : sessionStorage.accNo
	}
	$.ajax({
		url : 'getNumber.lti',
		method : 'POST',
		data : JSON.stringify(obj1),
		contentType : 'application/json',
		success : function(response) {
			var obj2 = {
				sendSMS : sotp,
				sendTo : response
			}
			console.log(sotp);
			$.ajax({
				url : 'sendSMS.lti',
				method : 'POST',
				data : JSON.stringify(obj2),
				contentType : 'application/json',
				success : function(response) {
				}
			})
		}
	})

	$("#otp").blur(function() {
		var reg = /^[0-9]{6}$/
		otp = $(this).val();
		if (otp == "" || !reg.test(otp)) {
			$(this).addClass("error");
			$(this).val("Invalid OTP");
		} else {
			$(this).addClass("noerror");
		}
	})

	$("#otp").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(otp);
	});

	$(".form").submit(function(evt) {
		evt.preventDefault();
		otp = $("#otp").val();
		if (sotp == otp) {
			var obj = {
				fromAccNo : sessionStorage.accNo,
				toAccNo : sessionStorage.toAccNo,
				amount : sessionStorage.amount
			}
			$.ajax({
				url : 'transfer.lti',
				method : 'POST',
				data : JSON.stringify(obj),
				contentType : 'application/json',
				success : function(response) {
					if (response == true) {
						$("#sess").removeClass("error");
						window.location.href = 'RedirectToHost.html';
					} else {
						$("#sess").addClass("error");
						$("#sess").text("Account balance low. Try again.");
					}
				}
			})
		} else {
			setTimeout(function(){ window.location.reload(); }, 2500);
			$("#disError").text("Incorrect OTP. Reloading page...");
		}
	})
})