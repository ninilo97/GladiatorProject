package com.lti.service;

import java.util.List;

import javax.annotation.Resource;

import com.lti.entity.Payee;

@Resource
public interface PayeeService {
	public List<Payee> getPayeeList(int accNo);
	public void addPayee(Payee payee);
}
