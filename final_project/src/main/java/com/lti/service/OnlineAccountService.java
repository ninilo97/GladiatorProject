package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.dao.GenericDao;
import com.lti.entity.OAccount;

@Service
public class OnlineAccountService {

	@Autowired
	private GenericDao dao;
		
	@Transactional
	public void onlineAccount(OAccount oacc) {
		dao.save(oacc);
		
	}

}
