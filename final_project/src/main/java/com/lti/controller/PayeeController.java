package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.AddPayee;
import com.lti.dto.GetPayeeList;
import com.lti.entity.Account;
import com.lti.entity.Payee;
import com.lti.service.OAccountService;
import com.lti.service.PayeeService;

@RestController
public class PayeeController {

	@Autowired
	private PayeeService payeeService;

	@Autowired
	private OAccountService oAccountService;

	@SuppressWarnings("finally")
	@PostMapping("/addPayee.lti")
	public boolean addPayee(@RequestBody AddPayee addPayee) {
		boolean flag=false;
		try{
			Account account = oAccountService.fetchAccountById(Integer.parseInt(addPayee.getAccNo()));
			
			Payee payee = new Payee();
			payee.setPayaccno(addPayee.getPayaccno());
			payee.setPayname(addPayee.getPayname());
			payee.setPaynn(addPayee.getPaynn());
			payee.setAccount(account);
			
			payeeService.addPayee(payee);
			flag=true;
		} catch (Exception e) {
		    e.printStackTrace();
		} finally {
			return flag;
		}
	}
	@PostMapping("/getPayeeList.lti")
	public List<Payee> getPayeeList(@RequestBody GetPayeeList getPayeeList) {
		return payeeService.getPayeeList(Integer.parseInt(getPayeeList.getAccNo()));
	}
}
