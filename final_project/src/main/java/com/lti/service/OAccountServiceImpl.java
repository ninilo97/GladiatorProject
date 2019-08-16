package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.dao.GenericDao;
import com.lti.entity.Account;
import com.lti.entity.OAccount;

@Service
public class OAccountServiceImpl implements OAccountService{

	@Autowired
	private GenericDao dao;
	
	@Transactional
	public void saveOAccount(OAccount oacc) {
		dao.save(oacc);
	}
	
	public Account fetchAccountById(int accNo) {
		return dao.fetchById(Account.class, accNo);
	}
}
