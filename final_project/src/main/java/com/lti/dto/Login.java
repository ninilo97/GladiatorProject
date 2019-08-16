package com.lti.dto;

public class Login {
	private int accNo;
	private String password;

	public int getAccNo() {
		return accNo;
	}

	public void setAccNo(int accNo) {
		this.accNo = accNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Login [accNo=" + accNo + ", password=" + password + "]";
	}
}
