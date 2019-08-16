package com.lti.dto;

public class Transfer {
	private String fromAccNo;
	private String toAccNo;
	private String amount;

	public String getFromAccNo() {
		return fromAccNo;
	}

	public void setFromAccNo(String fromAccNo) {
		this.fromAccNo = fromAccNo;
	}

	public String getToAccNo() {
		return toAccNo;
	}

	public void setToAccNo(String toAccNo) {
		this.toAccNo = toAccNo;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}
}
