package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.OAccountSetPass;
import com.lti.dto.Transfer;
import com.lti.entity.Account;
import com.lti.entity.OAccount;
import com.lti.service.OAccountService;
import com.lti.service.RegisterService;

@RestController
public class OAccountController {

	@Autowired
	private OAccountService oAccountService;
	
	@Autowired
	private RegisterService registerService;

	@SuppressWarnings("finally")
	@PostMapping("/OAccount.lti")
	public boolean onlineAccount(@RequestBody OAccountSetPass oAccSetPass) {
		boolean flag = false;
		try {
			Account account = oAccountService.fetchAccountById(Integer.parseInt(oAccSetPass.getAccNo()));

			OAccount oAccount = new OAccount();

			oAccount.setPass(oAccSetPass.getPass());
			oAccount.setTxPass(oAccSetPass.getTxPass());
			oAccount.setAttempt(Integer.parseInt("0"));
			oAccount.setAcc(account);

			oAccountService.saveOAccount(oAccount);
			flag = true;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return flag;
		}
	}

	@SuppressWarnings("finally")
	@PostMapping("/transfer.lti")
	public boolean onlineAccount(@RequestBody Transfer transfer) {
		boolean flag = false;
		
		try {
			Account fromAccount = oAccountService.fetchAccountById(Integer.parseInt(transfer.getFromAccNo()));
			Account toAccount = oAccountService.fetchAccountById(Integer.parseInt(transfer.getToAccNo()));
			
			int amount = Integer.parseInt(transfer.getAmount());
			if(amount > Integer.parseInt(fromAccount.getBalance())) return false;

			fromAccount.setBalance(Integer.toString(Integer.parseInt(fromAccount.getBalance())-amount));
			toAccount.setBalance(Integer.toString(Integer.parseInt(toAccount.getBalance())+amount));
			
			registerService.registerAccount(fromAccount);
			registerService.registerAccount(toAccount);
			flag = true;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return flag;
		}
	}

}
