$(function() {
	var animating;
	var fname;
	var mname;
	var lname;
	var frname;
	var mobno;
	var email;
	var aadhar;
	var dob;
	var raddrl1;
	var raddrl2;
	var rlandmark;
	var rstate;
	var rpincode;
	var paddrl1;
	var paddrl2;
	var plandmark;
	var pstate;
	var ppincode;
	var occp;
	var srcinc;
	var grsinc;
	
	$("#fname").blur(function() {
		var reg = /^[a-zA-Z]+$/
		fname = $(this).val();
		if (fname == "" || !reg.test(fname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
	});	
	
	$("#fname").focus(function() {
		$(this).removeClass("error");
		$(this).val(fname);
	});

	$("#mname").blur(function() {
		var reg = /^[a-zA-Z]+$/
		mname = $(this).val();
		if (mname == "" || !reg.test(mname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
	});	
	
	$("#mname").focus(function() {
		$(this).removeClass("error");
		$(this).val(mname);
	});

	$("#lname").blur(function() {
		var reg = /^[a-zA-Z]+$/
		lname = $(this).val();
		if (lname == "" || !reg.test(lname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
	});	
	
	$("#lname").focus(function() {
		$(this).removeClass("error");
		$(this).val(lname);
	});

	$("#frname").blur(function() {
		var reg = /^[a-zA-Z ]+$/
		frname = $(this).val();
		if (frname == "" || !reg.test(frname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
	});	
	
	$("#frname").focus(function() {
		$(this).removeClass("error");
		$(this).val(frname);
	});

	$("#mobno").blur(function() {
		var reg = /^[0-9]{10}$/
		mobno = $(this).val();
		if (mobno == "" || !reg.test(mobno)) {
			$(this).addClass("error");
			$(this).val("Invalid Mobile Number");
		}
	});	
	
	$("#mobno").focus(function() {
		$(this).removeClass("error");
		$(this).val(mobno);
	});

	$("#email").blur(function() {
		var reg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i
		email = $(this).val();
		if (email == "" || !reg.test(email)) {
			$(this).addClass("error");
			$(this).val("Invalid  Email");
		}
	});	
	
	$("#email").focus(function() {
		$(this).removeClass("error");
		$(this).val(email);
	});

	$("#aadhar").blur(function() {
		var reg = /^[0-9]{12}$/
		aadhar = $(this).val();
		if (aadhar == "" || !reg.test(aadhar)) {
			$(this).addClass("error");
			$(this).val("Invalid  Aadhar Number");
		}
	});	
	
	$("#aadhar").focus(function() {
		$(this).removeClass("error");
		$(this).val(aadhar);
	});

	$("#dob").blur(function() {
		dob = $(this).val();
		if (dob == "") {
			$(this).addClass("error");
		}
	});	
	
	$("#dob").focus(function() {
		$(this).removeClass("error");
	});
	
	$("#raddrl1").blur(function() {
		raddrl1 = $(this).val();
		if (raddrl1 == "") {
			$(this).addClass("error");
			$(this).val("Invalid Address");
		}
		else if(raddrl1.length>40){
			$(this).addClass("error");
			$(this).val("Max Address Length Exceeded");
		}
	});	
	
	$("#raddrl1").focus(function() {
		$(this).removeClass("error");
		$(this).val(raddrl1);
	});

	$("#raddrl2").blur(function() {
		raddrl2 = $(this).val();
		if (raddrl2 == "") {
			$(this).addClass("error");
			$(this).val("Invalid Address");
		}
		else if(raddrl2.length>40){
			$(this).addClass("error");
			$(this).val("Max Address Length Exceeded");
		}
	});	
	
	$("#raddrl2").focus(function() {
		$(this).removeClass("error");
		$(this).val(raddrl2);
	});

	$("#raddrl2").blur(function() {
		raddrl2 = $(this).val();
		if (raddrl2 == "") {
			$(this).addClass("error");
			$(this).val("Please enter a Address");
		}
		else if(raddrl2.length>40){
			$(this).addClass("error");
			$(this).val("Max Address Length Exceeded");
		}
	});

	$("#rlandmark").blur(function() {
		rlandmark = $(this).val();
		if (rlandmark == "") {
			$(this).addClass("error");
			$(this).val("Please enter a  Landmark");
		}
		else if(rlandmark.length>20){
			$(this).addClass("error");
			$(this).val("Max Landmark Length Exceeded");
		}
	});	
	
	$("#rlandmark").focus(function() {
		$(this).removeClass("error");
		$(this).val(rlandmark);
	});

	$("#rstate").blur(function() {
		rstate = $(this).val();
		if (rstate == null) {
			$(this).addClass("error");
			$(this).val("Please select a State");
		}
	});
	
	$("#rstate").focus(function() {
		$(this).removeClass("error");
		$(this).val(rstate);
	});

	$("#rcity").blur(function() {
		rcity = $(this).val();
		if (rcity == "") {
			$(this).addClass("error");
			$(this).val("Please enter a City");
		}
		else if(rcity.length>30){
			$(this).addClass("error");
			$(this).val("Max city Length Exceeded");
		}
	});	
	
	$("#rcity").focus(function() {
		$(this).removeClass("error");
		$(this).val(rcity);
	});

	$("#rpincode").blur(function() {
		rpincode = $(this).val();
		if (rpincode == "") {
			$(this).addClass("error");
			$(this).val("Incomplete function Please enter correct Pincode");
		}
		else if(rpincode.length>30){
			$(this).addClass("error");
			$(this).val("Incomplete function Max city Pincode Exceeded");
		}
	});	
	
	$("#rpincode").focus(function() {
		$(this).removeClass("error");
		$(this).val(rpincode);
	});

	$(".fbtn").click(function() {
		if (animating)
			return false;
		animating = true;

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
	});

	$(".pbtn").click(function() {
		if(animating) return false;
		animating = true;
		
		current_fs = $(this).parent().parent();
		previous_fs =$(this).parent().parent().prev();

		previous_fs.show(); 
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				scale = 0.8 + (1 - now) * 0.2;
				left = ((1-now) * 50)+"%";
				opacity = 1 - now;
				current_fs.css({'left': left});
				previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			easing: 'easeInOutBack'
		});
	});

	$(".form").submit(function(evt) {
		evt.preventDefault();
		var obj = {
			title : $("#title").val(),
			firstName : $("#fname").val(),
			middleName : $("#mname").val(),
			lastName : $("#lname").val(),
			fatherName : $("#frname").val(),
			mobileNum : $("#mobno").val(),
			emailID : $("#email").val(),
			aadharNum : $("#aadhar").val(),
			dob : $("#dob").val(),
			rAddrLine1 : $("#raddrl1").val(),
			rAddrLine2 : $("#raddrl2").val(),
			rLandmark : $("#rlandmark").val(),
			rState : $("#rstate").val(),
			rCity : $("#rcity").val(),
			rPincode : $("#rpincode").val(),
			mAddrLine1 : $("#paddrl1").val(),
			mAddrLine2 : $("#paddrl2").val(),
			mLandmark : $("#plandmark").val(),
			mState : $("#pstate").val(),
			mCity : $("#pcity").val(),
			mPincode : $("#ppincode").val(),
			occType : $("#occp").val(),
			sourceOfIncome : $("#srcinc").val(),
			grossAnnualIncome : $("#grsinc").val(),
			debitCard : $("#debit").val(),
			netBanking : $("#netbanking").val()
		}
		alert(JSON.stringify(obj));
		$.ajax({
			url : 'registerAccount.lti',
			method : 'POST',
			data : JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				alert("Registration Successful");
			}
		})
	})
})
