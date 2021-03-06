$(function() {
	var id;
	var password;

	$("#id").blur(function() {
		var reg = /^[0-9]{8}$/
		id = $(this).val();
		if (id == "" || !reg.test(id)) {
			$(this).addClass("error");
			$(this).val("Invalid Admin ID");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#id").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(id);
	});

	$("#password").blur(function() {
		var reg = /^[a-zA-Z]+$/
		password = $(this).val();
		if (password == "" || password.length < 8 || password.length > 20) {
			$(this).addClass("error");
		} else {
			$(this).addClass("noerror");
		}
	});

	$("#password").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
	});

	$(".form").submit(function(evt) {
		evt.preventDefault();
		var obj = {
			id : $("#id").val(),
			pass : $("#password").val()
		}
		$.ajax({
			url : 'adminLogin.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				if (response == true) {
					success();
				}
				else{
					$("#disError").text("Incorrect Account Number or Password");
				}
			}
		})
	})

	function success() {
		if (typeof (Storage) !== "undefined") {
			if (sessionStorage.id) {
				
			} else {
				sessionStorage.id = $("#id").val();
			}
			window.location.href = "Admin.html";
		} else {
			$("sess").text("Sorry, your browser does not support web storage");
		}
	}
})
