package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.lti.dao.GenericDao;
import com.lti.entity.Payee;

@Service
public class PayeeServiceImpl implements PayeeService{
	
	@Autowired
	private GenericDao gdao;
	
	@Transactional
	public void addPayee(Payee payee) {
		gdao.save(payee);
	}

}
