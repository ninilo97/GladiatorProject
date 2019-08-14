$(function() {
	var animating;
	var title;
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
	var rcity;
	var rpincode;
	var paddrl1;
	var paddrl2;
	var plandmark;
	var pstate;
	var pcity;
	var ppincode;
	var occp;
	var srcinc;
	var grsinc;
	var chk1;
	var chk2;
	var chk3;

	$("#title").blur(function() {
		title = $(this).val();
		if (title == null) {
			$(this).addClass("error");
			$(this).val("Title");
		}
		else{
			$(this).addClass("noerror");
		}
	});
	
	$("#title").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
	});
	
	$("#fname").blur(function() {
		var reg = /^[a-zA-Z]+$/
		fname = $(this).val();
		if (fname == "" || !reg.test(fname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#fname").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(fname);
	});

	$("#mname").blur(function() {
		var reg = /^[a-zA-Z]+$/
		mname = $(this).val();
		if (mname == "" || !reg.test(mname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#mname").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(mname);
	});

	$("#lname").blur(function() {
		var reg = /^[a-zA-Z]+$/
		lname = $(this).val();
		if (lname == "" || !reg.test(lname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#lname").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(lname);
	});

	$("#frname").blur(function() {
		var reg = /^[a-zA-Z ]+$/
		frname = $(this).val();
		if (frname == "" || !reg.test(frname)) {
			$(this).addClass("error");
			$(this).val("Invalid Name");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#frname").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(frname);
	});

	$("#mobno").blur(function() {
		var reg = /^[0-9]{10}$/
		mobno = $(this).val();
		if (mobno == "" || !reg.test(mobno)) {
			$(this).addClass("error");
			$(this).val("Invalid Mobile Number");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#mobno").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(mobno);
	});

	$("#email").blur(function() {
		var reg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i
		email = $(this).val();
		if (email == "" || !reg.test(email)) {
			$(this).addClass("error");
			$(this).val("Invalid  Email");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#email").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(email);
	});

	$("#aadhar").blur(function() {
		var reg = /^[0-9]{12}$/
		aadhar = $(this).val();
		if (aadhar == "" || !reg.test(aadhar)) {
			$(this).addClass("error");
			$(this).val("Invalid  Aadhar Number");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#aadhar").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(aadhar);
	});

	$("#dob").blur(function() {
		dob = $(this).val();
		if (dob == "") {
			$(this).addClass("error");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#dob").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
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
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#raddrl1").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
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
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#raddrl2").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(raddrl2);
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
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#rlandmark").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(rlandmark);
	});

	$("#rstate").blur(function() {
		rstate = $(this).val();
		if (rstate == null){
			$(this).addClass("error");
			$(this).val("Select State");
		}
		else{
			$(this).addClass("noerror");
		}
	});
	
	$("#rstate").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
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
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#rcity").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(rcity);
	});

	$("#rpincode").blur(function() {
		var reg = /^[0-9]{6}$/
		rpincode = $(this).val();
		if (rpincode == "" || !reg.test(rpincode)) {
			$(this).addClass("error");
			$(this).val("Invalid Pincode");
		}
		else{
			$(this).addClass("noerror");
		}
	});
	
	$("#rpincode").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(rpincode);
	});
	
	$("#checkbox1").click(test);

	function test() {
		if($(this).is(":checked")) {
			$("#paddr").hide(200);			
			
			raddrl1 = $("#raddrl1").val();
			raddrl2 = $("#raddrl2").val();
			rlandmark = $("#rlandmark").val();
			rstate = $("#rstate").val();
			rcity = $("#rcity").val();
			rpincode = $("#rpincode").val();
			
			$("#paddrl1").val(raddrl1);
			$("#paddrl2").val(raddrl2);
			$("#plandmark").val(rlandmark);
			$("#pstate").val(rstate);
			$("#pcity").val(rcity);
			$("#ppincode").val(rpincode);
			
			$("#paddrl1").removeClass("idle");
			$("#paddrl2").removeClass("idle");
			$("#plandmark").removeClass("idle");
			$("#pstate").removeClass("idle");
			$("#pcity").removeClass("idle");
			$("#ppincode").removeClass("idle");
			
			$("#paddrl1").removeClass("error");
			$("#paddrl2").removeClass("error");
			$("#plandmark").removeClass("error");
			$("#pstate").removeClass("error");
			$("#pcity").removeClass("error");
			$("#ppincode").removeClass("error");
		} else {
			$("#paddr").show(300);
			
			$("#paddrl1").val("");
			$("#paddrl2").val("");
			$("#plandmark").val("");
			$("#pstate").val("");
			$("#pcity").val("");
			$("#ppincode").val("");
			
			$("#paddrl1").addClass("idle");
			$("#paddrl2").addClass("idle");
			$("#plandmark").addClass("idle");
			$("#pstate").addClass("idle");
			$("#pcity").addClass("idle");
			$("#ppincode").addClass("idle");
		}
	}
	
	$("#paddrl1").blur(function() {
		paddrl1 = $(this).val();
		if (paddrl1 == "") {
			$(this).addClass("error");
			$(this).val("Invalid Address");
		}
		else if(paddrl1.length>40){
			$(this).addClass("error");
			$(this).val("Max Address Length Exceeded");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#paddrl1").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(paddrl1);
	});

	$("#paddrl2").blur(function() {
		paddrl2 = $(this).val();
		if (paddrl2 == "") {
			$(this).addClass("error");
			$(this).val("Invalid Address");
		}
		else if(paddrl2.length>40){
			$(this).addClass("error");
			$(this).val("Max Address Length Exceeded");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#paddrl2").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(paddrl2);
	});
	
	$("#plandmark").blur(function() {
		plandmark = $(this).val();
		if (plandmark == "") {
			$(this).addClass("error");
			$(this).val("Please enter a  Landmark");
		}
		else if(plandmark.length>20){
			$(this).addClass("error");
			$(this).val("Max Landmark Length Exceeded");
		}
		else{
			$(this).addClass("noerror");
		}
	});
	
	$("#plandmark").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(plandmark);
	});

	$("#pstate").blur(function() {
		pstate = $(this).val();
		if (pstate == null) {
			$(this).addClass("error");
			$(this).val("Select State");
		}
		else{
			$(this).addClass("noerror");
		}
	});
	
	$("#pstate").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(pstate);
	});

	$("#pcity").blur(function() {
		pcity = $(this).val();
		if (pcity == "") {
			$(this).addClass("error");
			$(this).val("Please enter a City");
		}
		else if(pcity.length>30){
			$(this).addClass("error");
			$(this).val("Max city Length Exceeded");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#pcity").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(pcity);
	});

	$("#ppincode").blur(function() {
		var reg = /^[0-9]{6}$/
		ppincode = $(this).val();
		if (ppincode == "" || !reg.test(ppincode)) {
			$(this).addClass("error");
			$(this).val("Invalid Pincode");
		}
		else{
			$(this).addClass("noerror");
		}
	});
	
	$("#ppincode").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(ppincode);
	});
	
	$("#occp").blur(function() {
		occp = $(this).val();
		if (occp == "") {
			$(this).addClass("error");
			$(this).val("Please enter Occupation Type");
		}
		else if(occp.length>40){
			$(this).addClass("error");
			$(this).val("Max Length Exceeded");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#occp").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(occp);
	});
	
	$("#srcinc").blur(function() {
		srcinc = $(this).val();
		if (srcinc == "") {
			$(this).addClass("error");
			$(this).val("Please enter Source of Income");
		}
		else if(srcinc.length>20){
			$(this).addClass("error");
			$(this).val("Max Length Exceeded");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#srcinc").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(srcinc);
	});
	
	$("#grsinc").blur(function() {
		grsinc = $(this).val();
		if (grsinc == "") {
			$(this).addClass("error");
			$(this).val("Please enter Source of Income");
		}
		else if(grsinc.length>20){
			$(this).addClass("error");
			$(this).val("Max Length Exceeded");
		}
		else{
			$(this).addClass("noerror");
		}
	});	
	
	$("#grsinc").focus(function() {
		$(this).removeClass("idle");
		$(this).removeClass("error");
		$(this).removeClass("noerror");
		$(this).val(grsinc);
	});
	
	$("#chk1").click(function(){
		var flag1 = $(this).parent().parent().find(".idle").val();
		var flag2 = $(this).parent().parent().find(".error").val();
		chk1=false;
		if(flag1===undefined && flag2===undefined){
			chk1=true;
		}
		else{
			chk1=false;
		}
	})
	
	$("#chk2").click(function(){
		var flag1 = $(this).parent().parent().find(".idle").val();
		var flag2 = $(this).parent().parent().find(".error").val();
		chk2=false;
		if(flag1===undefined && flag2===undefined){
			chk2=true;
		}
		else{
			chk2=false;
		}
	})

	$(".fbtn").click(function() {
		if(animating)
			return false;
		else{
			var chk = $(this).attr("id");
			if(chk=="chk1"){
				if(chk1==false){
					return false;
				}
			}
			else{
				if(chk2==false){
					return false;
				}
			}
		}
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
	
	$("#chk3").click(function(){
		var flag1 = $(this).parent().parent().find(".idle").val();
		var flag2 = $(this).parent().parent().find(".error").val();
		chk3=false;
		if(flag1===undefined && flag2===undefined){
			chk3=true;
		}
		else{
			chk3=false;
		}
	})
	
	$(".form").submit(function(evt) {
		evt.preventDefault();
		var tAndC = false;
		if($("#tAndC").is(":checked")) {
			tAndC=true;
		}
		if(chk3==false || tAndC==false){
			return false;
		}
		var debitCheck="0";
		var netbankCheck="0";
		if($("#debit").is(":checked")) {
			debitCheck="1";
		}
		if($("#netbanking").is(":checked")) {
			netbankCheck="1";
		}
		
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
			debitCard : debitCheck,
			netBanking : netbankCheck
		}
		
		$.ajax({
			url : 'registerAccount.lti',
			method : 'POST',
			data: JSON.stringify(obj),
			contentType : 'application/json',
			success : function(response) {
				alert("Registration Successful");
			}
		})
	})
})
