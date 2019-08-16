package com.lti.service;

import javax.annotation.Resource;

import com.lti.entity.OAccount;

@Resource
public interface LoginService {
	public OAccount getOAccountById(int accNo);
}