package com.lti.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.GenericDao;
import com.lti.entity.Account;
import com.lti.entity.Admin;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private GenericDao gdao;

	public Admin checkPassword(Admin adm) {
		return gdao.fetchById(Admin.class, Integer.parseInt(adm.getPass()));
	}

	public List<Account> getAllAccounts() {
		return gdao.fetchAll(Account.class);
	}

	@Transactional
	public void rejectAccount(int accNo) {
		gdao.delete(gdao.fetchById(Account.class, accNo));
	}

	@Transactional
	public void approveAccount(int accNo) {
		Account acc = gdao.fetchById(Account.class, accNo);
		acc.setAppr("1");
		gdao.save(acc);
	}
}
