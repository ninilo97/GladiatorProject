package com.lti.service;

import java.util.List;

import javax.annotation.Resource;

import com.lti.entity.Account;
import com.lti.entity.Admin;

@Resource
public interface AdminService {
	public Admin checkPassword(Admin adm);
	public List<Account> getAllAccounts();
	public void rejectAccount(int accNo);
	public void approveAccount(int accNo);
}
