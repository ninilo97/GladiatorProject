package com.lti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.dto.AdminApproveReject;
import com.lti.entity.Account;
import com.lti.entity.Admin;
import com.lti.service.AdminService;

@RestController
public class AdminController {
	
	@Autowired
	private AdminService adminService;

	@PostMapping("/adminLogin.lti")
	public boolean checkPassword(@RequestBody Admin adm) {
		int admCheckId = adminService.checkPassword(adm).getId();
		if(admCheckId==adm.getId()) {
			return true;
		}
		else{
			return false;		
		}
	}

	@PostMapping("/adminGetDetails.lti")
	public List<Account> getAllAccounts() {
		return adminService.getAllAccounts();
	}

	@PostMapping("/adminApprove.lti")
	public void adminApprove(@RequestBody AdminApproveReject adr) {
		adminService.approveAccount(adr.getAccNo());
	}

	@PostMapping("/adminReject.lti")
	public void adminReject(@RequestBody AdminApproveReject adr) {
		adminService.rejectAccount(adr.getAccNo());
	}
}
