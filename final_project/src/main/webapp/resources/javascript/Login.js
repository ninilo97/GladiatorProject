$(function() {
	var accNo;
	var password;
	
	$("#accNo").blur(function() {
		var reg = /^[0-9]+$/
		accNo = $(this).val();
		if (accNo == "" || !reg.test(accNo)) {
			$(this).addClass("error");
			$(this).val("Invalid Account Number");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#accNo").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$("#disError").text("");
		$(this).val(accNo);
	});
	
	$("#password").blur(function() {
		var reg = /^[a-zA-Z]+$/
		password = $(this).val();
		if (password == "" || password.length<8 || password.length>20){
			$(this).addClass("error");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#password").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$("#disError").text("");
		$(this).val(password);
	});
	
	$(".form").submit(function(evt) {
		evt.preventDefault();
		var obj = {
			accNo : $("#accNo").val(),
			password : $("#password").val(),
		}
		$.ajax({
			url : 'Login.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				if(response==true){
					success();
				}
				else{
					$("#disError").text("Incorrect Account Number or  Password");
				}
			}
		})
	})

	function success() {
		if (typeof (Storage) !== "undefined") {
			if (sessionStorage.id) {
				
			} else {
				sessionStorage.accNo = $("#accNo").val();
			}
			window.location.href="Dashboard.html";
		} else {
			$("sess").text("Sorry, your browser does not support web storage");
		}
	}
})
