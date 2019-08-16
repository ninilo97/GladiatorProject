package com.lti.dto;

public class OAccountSetPass {
	private String accNo;
	private String pass;
	private String txPass;

	public String getAccNo() {
		return accNo;
	}

	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getTxPass() {
		return txPass;
	}

	public void setTxPass(String txPass) {
		this.txPass = txPass;
	}

	@Override
	public String toString() {
		return "OAccountSetPass [accNo=" + accNo + ", pass=" + pass + ", txPass=" + txPass + "]";
	}
}
