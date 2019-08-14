package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.Payee;
import com.lti.service.PayeeService;

@RestController
public class PayeeController {

	@Autowired
	private PayeeService payeeService;

	@PostMapping("/addPayee.lti")
	public void addPayee(@RequestBody Payee payee) {
		// System.out.println(addnew.toString());
		payeeService.addPayee(payee);
	}
}
