package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.Login;
import com.lti.entity.OAccount;
import com.lti.service.LoginService;

@RestController
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping("/Login.lti")
	public boolean checkPassword(@RequestBody Login login) {
		OAccount oAccount = loginService.getOAccountById(login.getAccNo());
		if (oAccount.getPass().equals(login.getPassword())) {
			return true;
		} else {
			return false;
		}
	}
}
