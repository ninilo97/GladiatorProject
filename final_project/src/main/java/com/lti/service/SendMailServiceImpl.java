package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.lti.dto.OTP;

@Service
public class SendMailServiceImpl implements SendMailService {

	@Autowired
	private MailSender mailSender;

	@Autowired
	private SimpleMailMessage message;

	public void send(OTP otp) {
		//System.out.println(otp.getSendSMS()+" "otp.get);
		/*
		message.setTo(otp.getSendTo()); // set a proper recipient of the mail
		message.setSubject("Dollar Union OTP");
		message.setText(otp.getSendSMS()+" is your OTP for Dollar Union");
		mailSender.send(message);
		*/
	}
}