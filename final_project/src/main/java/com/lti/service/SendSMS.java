package com.lti.service;

import javax.annotation.Resource;

import com.lti.dto.OTP;

@Resource
public interface SendSMS {
	public String sendSms(OTP otp);
	public String sendSmsID(OTP otp);
}
