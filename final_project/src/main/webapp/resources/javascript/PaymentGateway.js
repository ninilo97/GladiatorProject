$(function() {
	var otp;
	
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

		
	})
})