package com.lti.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.dao.GenericDao;
import com.lti.dao.PayeeDao;
import com.lti.entity.Account;
import com.lti.entity.Payee;

@Service
public class PayeeServiceImpl implements PayeeService{
	
	@Autowired
	private GenericDao gdao;
	
	@Autowired
	private PayeeDao dao;
	
	@Transactional
	public void addPayee(Payee payee) {
		gdao.save(payee);
	}
	
	public List<Payee> getPayeeList(int accNo) {
		return dao.getPayeeList(accNo);
	}
}
