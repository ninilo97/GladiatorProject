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
	public void registerAccount(Account acc) {
		gdao.save(acc);
	}
}
