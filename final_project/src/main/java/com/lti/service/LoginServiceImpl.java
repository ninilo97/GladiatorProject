package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.dao.GenericDao;
import com.lti.dao.LoginDao;
import com.lti.entity.OAccount;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	private LoginDao dao;
	
	public OAccount getOAccountById(int accNo) {
		return dao.fetchByAccNo(accNo);
	}
}
