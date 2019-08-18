package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.Account;
import com.lti.service.RegisterService;

@RestController
public class RegisterController {
	
	@Autowired
	private RegisterService registerService;

	@PostMapping("/registerAccount.lti")
	public String registerAccount(@RequestBody Account acc) {
		return registerService.registerAccount(acc);
	}
}
