$(function() {
	if (sessionStorage.id == undefined) {
		$("#sess").text("Session ended... Redirecting to Admin Login....");
		window.location.href = "AdminLogin.html";
	}

	function emptyTable() {
		$('#acclisttable tbody').empty();
	}
	$(function() {
		$("#approve").click(function(evt) {
			evt.preventDefault();
			var obj = {
				accNo : $("#accno").val()
			}
			$.ajax({
				url : 'adminApprove.lti',
				method : 'POST',
				data : JSON.stringify(obj),
				contentType : 'application/json',
				success : function(response) {
				}
			})
		})

		$("#reject").click(function(evt) {
			evt.preventDefault();
			var obj = {
				accNo : $("#accno").val()
			}
			$.ajax({
				url : 'adminReject.lti',
				method : 'POST',
				data : JSON.stringify(obj),
				contentType : 'application/json',
				success : function(response) {
				}
			})
		})

		$("#details").click(
				function(evt) {
					evt.preventDefault();

					$.ajax({
						url : 'adminGetDetails.lti',
						method : 'POST',
						contentType : 'application/json',
						success : function(response) {
							// alert(JSON.stringify(response));
							emptyTable();
							$.each(response, function(index, element) {
								if (element.appr == "1") return;
								$('<tr>').append(
										$('<td>').text(element.accNo),
										$('<td>').text(element.firstName),
										$('<td>').text(element.middleName),
										$('<td>').text(element.lastName),
										$('<td>').text(element.fatherName),
										$('<td>').text(element.mobileNum),
										$('<td>').text(element.emailID),
										$('<td>').text(element.aadharNum),
										$('<td>').text(element.dob),
										$('<td>').text(element.rAddrLine1),
										$('<td>').text(element.rAddrLine2),
										$('<td>').text(element.rLandmark),
										$('<td>').text(element.rState),
										$('<td>').text(element.rCity),
										$('<td>').text(element.rPincode),
										$('<td>').text(element.mAddrLine1),
										$('<td>').text(element.mAddrLine2),
										$('<td>').text(element.mLandmark),
										$('<td>').text(element.mState),
										$('<td>').text(element.mCity),
										$('<td>').text(element.mPincode),
										$('<td>').text(element.occType),
										$('<td>').text(element.sourceOfIncome),
										$('<td>').text(
												element.grossAnnualIncome),
										$('<td>').text(element.debitCard),
										$('<td>').text(element.netBanking))
										.appendTo('#acclisttable tbody');
							})
						}
					})
				});

		$("#logout").click(function(evt) {
			evt.preventDefault();
			sessionStorage.clear();
			window.location.href = "AdminLogin.html";
		});
	});

})
