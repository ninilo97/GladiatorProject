package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.OAccountCheck;
import com.lti.dto.OAccountSetPass;
import com.lti.dto.OTP;
import com.lti.dto.Transfer;
import com.lti.entity.Account;
import com.lti.entity.OAccount;
import com.lti.service.OAccountService;
import com.lti.service.SendSMS;

@RestController
public class OAccountController {

	@Autowired
	private OAccountService oAccountService;

	@Autowired
	private SendSMS sendSMS;

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
	@PostMapping("/OAccountCheck.lti")
	public boolean onlineAccountCheck(@RequestBody OAccountCheck oAccCheck) {
		boolean flag = false;
		try {
			Account account = oAccountService.fetchAccountById(Integer.parseInt(oAccCheck.getAccNo()));
			System.out.println(account.getAppr());
			if (Integer.parseInt(account.getAppr()) > 0)
				flag = true;
			System.out.println(flag);
			return flag;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return flag;
		}
	}

	@PostMapping("/transfer.lti")
	public boolean transfer(@RequestBody Transfer transfer) {
		return oAccountService.transfer(transfer);
	}

	@PostMapping("/sendSMS.lti")
	public String sendSMS(@RequestBody OTP otp) {
		//return "Comment in OAccountController";
		return sendSMS.sendSms(otp);
	}

	@PostMapping("/sendEmail.lti")
	public String sendEmail(@RequestBody OTP otp) {
		return sendSMS.sendSms(otp);
	}

	@PostMapping("/getEmail.lti")
	public String sendEmail(@RequestBody OAccountCheck oAccCheck) {		
		Account account = oAccountService.fetchAccountById(Integer.parseInt(oAccCheck.getAccNo()));
		return account.getEmailID();
	}

	@PostMapping("/getNumber.lti")
	public String sendNumber(@RequestBody OAccountCheck oAccCheck) {		
		Account account = oAccountService.fetchAccountById(Integer.parseInt(oAccCheck.getAccNo()));
		return String.valueOf(account.getMobileNum());
	}
}
