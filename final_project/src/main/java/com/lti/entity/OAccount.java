package com.lti.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="TB_ONLINEACCOUNT")
public class OAccount {
		@Id
		@GeneratedValue
		@Column(name="ACCID")
		private int accId;
				
		@Column(name = "PASS")
		private String pass;
		
		@Column(name = "TXPASS")
		private String txPass;
		
		@Column(name = "ATTEMPT")
		private String attempt;
		
		@ManyToOne
		@JoinColumn(name = "ACCNO")
		private Account acc;
		
		public String getTxPass() {
			return txPass;
		}

		public void setTxPass(String txPass) {
			this.txPass = txPass;
		}

		public String getAttempt() {
			return attempt;
		}

		public void setAttempt(String attempt) {
			this.attempt = attempt;
		}

		public int getAccId() {
			return accId;
		}

		public void setAccId(int accId) {
			this.accId = accId;
		}

		public String getPass() {
			return pass;
		}

		public void setPass(String pass) {
			this.pass = pass;
		}

		public Account getAcc() {
			return acc;
		}

		public void setAcc(Account acc) {
			this.acc = acc;
		}
}
		
