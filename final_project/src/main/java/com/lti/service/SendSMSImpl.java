package com.lti.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import com.lti.dto.OTP;

import org.springframework.http.codec.multipart.SynchronossPartHttpMessageReader;
import org.springframework.stereotype.Service;

@Service
public class SendSMSImpl implements SendSMS {
	public String sendSms(OTP otp) {
		try {
			// Construct data
			String apiKey = "apikey=" + "psd3w+wM6VQ-mgDFJacBeBI15YYLOuel62F5zufnbk";
			String message = "&message=" + otp.getSendSMS() + " is your DollarUnion OTP";
			String sender = "&sender=" + "TXTLCL";
			String numbers = "&numbers=" + "91" + otp.getSendTo();

			// Send data
			HttpURLConnection conn = (HttpURLConnection) new URL("https://api.textlocal.in/send/?").openConnection();
			String data = apiKey + numbers + message + sender;
			System.out.println(data);
			conn.setDoOutput(true);
			conn.setRequestMethod("POST");
			conn.setRequestProperty("Content-Length", Integer.toString(data.length()));
			conn.getOutputStream().write(data.getBytes("UTF-8"));
			final BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			final StringBuffer stringBuffer = new StringBuffer();
			String line;
			while ((line = rd.readLine()) != null) {
				stringBuffer.append(line);
			}
			rd.close();

			return stringBuffer.toString();
		} catch (Exception e) {
			System.out.println("Error SMS " + e);
			return "Error " + e;
		}
	}
	public String sendSmsID(OTP otp) {
		try {
			// Construct data
			String apiKey = "apikey=" + "psd3w+wM6VQ-mgDFJacBeBI15YYLOuel62F5zufnbk";
			String message = "&message=" + otp.getSendSMS() + " is your DollarUnion Account Password";
			String sender = "&sender=" + "TXTLCL";
			String numbers = "&numbers=" + "91" + otp.getSendTo();

			// Send data
			HttpURLConnection conn = (HttpURLConnection) new URL("https://api.textlocal.in/send/?").openConnection();
			String data = apiKey + numbers + message + sender;
			System.out.println(data);
			conn.setDoOutput(true);
			conn.setRequestMethod("POST");
			conn.setRequestProperty("Content-Length", Integer.toString(data.length()));
			conn.getOutputStream().write(data.getBytes("UTF-8"));
			final BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			final StringBuffer stringBuffer = new StringBuffer();
			String line;
			while ((line = rd.readLine()) != null) {
				stringBuffer.append(line);
			}
			rd.close();

			return stringBuffer.toString();
		} catch (Exception e) {
			System.out.println("Error SMS " + e);
			return "Error " + e;
		}
	}
}