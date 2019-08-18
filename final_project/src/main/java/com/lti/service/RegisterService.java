package com.lti.service;

import javax.annotation.Resource;

import com.lti.entity.Account;

@Resource
public interface RegisterService {
	public String registerAccount(Account acc);
}
