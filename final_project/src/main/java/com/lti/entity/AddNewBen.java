package com.lti.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_ADDNEWBEN")
public class AddNewBen {
	
	@Id
	@GeneratedValue
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "ACC_NO")
	private String acct;
	
	@Column(name = "NICK_NAME")
	private String nickname;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAcct() {
		return acct;
	}

	public void setAcct(String acct) {
		this.acct = acct;
	}
	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	
	
	
}
