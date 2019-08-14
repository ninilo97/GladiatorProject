package com.lti.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "TB_PAYEE")
public class Payee {
	
	@Id
	@GeneratedValue
	@Column(name = "PAYID")
	private int payid;
	
	@Column(name = "PAYNAME")
	private String payname;

	@Column(name = "PAYACCNO")
	private String payaccno;
	
	@Column(name = "PAYNN")
	private String paynn;

	@ManyToOne
	@JoinColumn(name = "ACCNO")
	private Account account;

	public int getPayid() {
		return payid;
	}

	public void setPayid(int payid) {
		this.payid = payid;
	}

	public String getPayname() {
		return payname;
	}

	public void setPayname(String payname) {
		this.payname = payname;
	}

	public String getPayaccno() {
		return payaccno;
	}

	public void setPayaccno(String payaccno) {
		this.payaccno = payaccno;
	}

	public String getPaynn() {
		return paynn;
	}

	public void setPaynn(String paynn) {
		this.paynn = paynn;
	}	
}
