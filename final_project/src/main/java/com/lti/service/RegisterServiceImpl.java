package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.GenericDao;
import com.lti.entity.Account;

@Service
public class RegisterServiceImpl implements RegisterService{
	
	@Autowired
	private GenericDao gdao;
	
	@Transactional
	public String registerAccount(Account acc) {
		Account updatedAcc = (Account) gdao.save(acc);
		return String.valueOf(updatedAcc.getAccNo());
	}
}
