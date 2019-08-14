package com.lti.service;

import javax.annotation.Resource;

import com.lti.entity.Payee;

@Resource
public interface PayeeService {
	public void addPayee(Payee payee);
}
