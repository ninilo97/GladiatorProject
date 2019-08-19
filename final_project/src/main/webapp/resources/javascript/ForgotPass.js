$(function() {
	var current_fs;
	var next_fs;
	var otp;
	var accNo;
	var otp;
	var sotp = Math.floor(100000 + Math.random() * 900000)
	console.log(sotp);
	
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
	
	$("#btn1").click(function(evt) {
		evt.preventDefault();

		current_fs = $(this).parent().parent();
		next_fs = $(this).parent().parent().next();
		next_fs.show();
		current_fs.animate({
			opacity : 0
		}, {
			step : function(now, mx) {
				scale = 1 - (1 - now) * 0.2;
				left = (now * 50) + "%";
				opacity = 1 - now;
				current_fs.css({
					'transform' : 'scale(' + scale + ')'
				});
				next_fs.css({
					'left' : left,
					'opacity' : opacity
				});
			},
			duration : 800,
			complete : function() {
				current_fs.hide();
				animating = false;
			},
			easing : 'easeInOutBack'
		});
		var obj1 = {
			accNo : $("#accNo").val()
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
	})
	
	$(".form").submit(function(evt) {
		evt.preventDefault();
		otp = $("#otp").val();
		if (sotp == otp) {
			var obj = {
				accNo : $("#accNo").val()
			}
			$.ajax({
				url : 'sendSMSID.lti',
				method : 'POST',
				data : JSON.stringify(obj),
				contentType : 'application/json',
				success : function(response) {
					$("#sess").text("Password Sent. Redirecting to Home");
					setTimeout(function() {window.location.href = 'Home.html';}, 3000);
				}
			})
		} else {
			$("#sess").text("Incorrect OTP. Try again.");
		}
	})
})