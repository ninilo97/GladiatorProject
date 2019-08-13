package com.lti.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_ONLINEACCOUNT")
public class OnlineAccount {
	
	
		@Id
		@GeneratedValue
		@Column(name="ACCID")
		private int accid;
		
		@Column(name = "ACCNO")
		private int accNo;
		
		@Column(name = "PASS")
		private String password;
		
		@Column(name = "CONFIRMPASS")
		private String cpassword;
		
		@Column(name = "TXPASS")
		private int txPass;
		
		@Column(name = "CONFIRMTXPASS")
		private int ctxPass;
		
		@Column(name = "ATTEMPT")
		private int attempt;
		
		public int getAccid() {
			return accid;
		}

		public void setAccid(int accid) {
			this.accid = accid;
		}

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

		public String getCpassword() {
			return cpassword;
		}

		public void setCpassword(String cpassword) {
			this.cpassword = cpassword;
		}

		public int getTxPass() {
			return txPass;
		}

		public void setTxPass(int txPass) {
			this.txPass = txPass;
		}

		public int getCtxPass() {
			return ctxPass;
		}

		public void setCtxPass(int ctxPass) {
			this.ctxPass = ctxPass;
		}

		public int getAttempt() {
			return attempt;
		}

		public void setAttempt(int attempt) {
			this.attempt = attempt;
		}

}
