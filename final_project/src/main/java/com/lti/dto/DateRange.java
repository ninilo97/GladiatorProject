package com.lti.dto;

import java.time.LocalDate;

public class DateRange {
	private int accNo;
	private LocalDate Date1;
	private LocalDate Date2;
	
	public int getAccNo() {
		return accNo;
	}

	public void setAccNo(int accNo) {
		this.accNo = accNo;
	}

	public LocalDate getDate1() {
		return Date1;
	}

	public void setDate1(LocalDate date1) {
		Date1 = date1;
	}

	public LocalDate getDate2() {
		return Date2;
	}

	public void setDate2(LocalDate date2) {
		Date2 = date2;
	}
}
