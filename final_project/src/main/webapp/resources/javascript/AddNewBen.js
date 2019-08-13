$(function() 
{
	var name;
	var accno;
	var raccno;

	$("#name").blur(function() {
		var reg = /^[a-zA-Z ]+$/
			name = $(this).val();
		if (name == "" || !reg.test(name)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#name").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(name);
	});
	
	
	$("#acct").blur(function() {
		var reg = /^[0-9]{8}$/
			acct = $(this).val();
		if (acct == "" || !reg.test(acct)) {
			$(this).addClass("error");
			$(this).val("Invalid  Account Number");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#acct").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(acct);
	});
	
	$("#racct").blur(function() {
		var reg = /^[0-9]{8}$/
			racct = $(this).val();
		if (racct == "" || !reg.test(racct)) {
			$(this).addClass("error");
			$(this).val("Invalid  Account Number");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#racct").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(racct);
	});
	
	$(".form").submit(function(evt) {
		evt.preventDefault();
		var obj = {
			name : $("#name").val(),
			accno : $("#acct").val(),
			nickname : $("#nn").val()
		}
		
		alert(JSON.stringify(obj));
		$.ajax({
			url : 'addnewben.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				alert("Beneficiary added Successfully");
			}
		})
	})
	
	
	$('#acct, #racct').on('keyup', function () {
		if ($('#acct').val() == $('#racct').val()) {
				$('#msg').html('Matching').css('color', 'green');
		} else 
				$('#msg').html('Not Matching').css('color', 'red');
	});
	
	
	
	
});
