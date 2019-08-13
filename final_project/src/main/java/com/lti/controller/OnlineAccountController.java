package com.lti.controller;

public class OnlineAccountController {
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RestController;

	import com.lti.entity.Account;
	import com.lti.entity.OnlineAccount;
	import com.lti.service.OnlineAccountService;
	import com.lti.service.RegisterService;

	@RestController
	public class OnlineAccountController {
		
		@Autowired
		private OnlineAccountService onlineaccountService;

		@PostMapping("/onlineAccount.lti")
		public void onlineAccount(@RequestBody OnlineAccount oacc) {
			System.out.println(oacc.toString());
			onlineaccountService.onlineAccount(oacc);
	}

}
