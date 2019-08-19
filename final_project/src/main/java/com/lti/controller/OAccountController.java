package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.DateRange;
import com.lti.dto.OAccountCheck;
import com.lti.dto.OAccountSetPass;
import com.lti.dto.OTP;
import com.lti.dto.Transfer;
import com.lti.entity.Account;
import com.lti.entity.OAccount;
import com.lti.entity.TransactionEntity;
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
	@PostMapping("/OAccountUpdate.lti")
	public boolean onlineAccountUpdate(@RequestBody OAccountSetPass oAccSetPass) {
		boolean flag = false;
		try {
			Account account = oAccountService.fetchAccountById(Integer.parseInt(oAccSetPass.getAccNo()));

			OAccount oAccount = oAccountService.fetchByOAccountFid(Integer.parseInt(oAccSetPass.getAccNo()));

			oAccount.setPass(oAccSetPass.getPass());
			oAccount.setTxPass(oAccSetPass.getTxPass());
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
			if (Integer.parseInt(account.getAppr()) > 0)
				flag = true;
			return flag;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return flag;
		}
	}

	@PostMapping("/OAccountReturn.lti")
	public Account onlineAccountReturn(@RequestBody OAccountCheck oAccCheck) {
		return oAccountService.fetchAccountById(Integer.parseInt(oAccCheck.getAccNo()));
	}

	@PostMapping("/OAccountTx.lti")
	public List<TransactionEntity> onlineAccountTx(@RequestBody OAccountCheck oAccCheck) {
		return oAccountService.fetchTx(Integer.parseInt(oAccCheck.getAccNo()));
	}

	@PostMapping("/OAccountTxDate.lti")
	public List<TransactionEntity> onlineAccountTxDate(@RequestBody DateRange dateRange) {
		return oAccountService.fetchTxDate(dateRange);
	}

	@PostMapping("/transfer.lti")
	public boolean transfer(@RequestBody Transfer transfer) {
		return oAccountService.transfer(transfer);
	}

	@PostMapping("/sendSMS.lti")
	public String sendSMS(@RequestBody OTP otp) {
		System.out.println("OTP in console");
		return "Comment in OAccountController";
		// return sendSMS.sendSms(otp);
	}

	@PostMapping("/sendSMSID.lti")
	public String sendSMSID(@RequestBody OAccountCheck oAccCheck) {
		System.out.println(oAccCheck.getAccNo());
		Account account = oAccountService.fetchAccountById(Integer.parseInt(oAccCheck.getAccNo()));
		OAccount oAccount = oAccountService.fetchByOAccountFid(Integer.parseInt(oAccCheck.getAccNo()));
		// return "Comment in OAccountController";
		System.out.println(oAccount.getPass() + " " + account.getMobileNum());
		OTP otp = new OTP();
		otp.setSendSMS(oAccount.getPass());
		otp.setSendTo(String.valueOf(account.getMobileNum()));
		return sendSMS.sendSmsID(otp);
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
