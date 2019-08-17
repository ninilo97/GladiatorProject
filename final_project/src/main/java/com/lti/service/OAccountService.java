package com.lti.service;

import javax.annotation.Resource;

import com.lti.dto.Transfer;
import com.lti.entity.Account;
import com.lti.entity.OAccount;

@Resource
public interface OAccountService {
	public void saveOAccount(OAccount oacc);
	public Account fetchAccountById(int accNo);
	public boolean transfer(Transfer transfer);
}