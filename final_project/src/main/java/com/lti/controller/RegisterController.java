package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.Account;
import com.lti.service.RegisterServiceImpl;

@RestController
public class RegisterController {
	@Autowired
	private RegisterServiceImpl registerService;

	@PostMapping("/registerAccount.lti")
	public void registerAccount(@RequestBody Account acc) {
		System.out.println(acc.toString());
		registerService.registerAccount(acc);
	}
}
