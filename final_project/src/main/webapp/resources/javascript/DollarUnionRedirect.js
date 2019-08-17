$(function() {
	var getQueryString = function(field, url) {
		var href = url ? url : window.location.href;
		var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
		var string = reg.exec(href);
		return string ? string[1] : null;
	};
	sessionStorage.toAccNo = getQueryString('toAccNo');
	sessionStorage.amount = getQueryString('amount');
	sessionStorage.redirectUrl = getQueryString('redirectUrl');
	sessionStorage.api = true;
	window.location.href = 'Login.html'
	//http://localhost:8087/final_project/DollarUnionRedirect.html?toAccNo=385&amount=1000&redirectUrl=admin.html
})
