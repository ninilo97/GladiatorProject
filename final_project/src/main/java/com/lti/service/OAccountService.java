package com.lti.service;

import java.util.List;

import javax.annotation.Resource;

import com.lti.dto.Transfer;
import com.lti.entity.Account;
import com.lti.entity.OAccount;
import com.lti.entity.TransactionEntity;

@Resource
public interface OAccountService {
	public void saveOAccount(OAccount oacc);
	public void delete(OAccount oAccount);
	public OAccount fetchByOAccountFid(int accNo);
	public Account fetchAccountById(int accNo);
	public List<TransactionEntity> fetchTx(int accNo);
	public boolean transfer(Transfer transfer);
}
