package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.OAccount;
import com.lti.service.OnlineAccountService;

@RestController
public class OAccountController {

	@Autowired
	private OnlineAccountService onlineaccountService;

	@PostMapping("/OAccount.lti")
	public void onlineAccount(@RequestBody OAccount oacc) {
		System.out.println(oacc.getAcc().getAccNo());
		//onlineaccountService.onlineAccount(oacc);
	}

}
