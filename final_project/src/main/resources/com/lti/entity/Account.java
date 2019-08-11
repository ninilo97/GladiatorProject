package com.lti.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_ACCOUNT")
public class Account {

	@Id
	@GeneratedValue
	@Column(name = "ACCNO")
	private int accNo;

	@Column(name = "TITLE")
	private String title;
	@Column(name = "FNAME")
	private String firstName;
	@Column(name = "MNAME")
	private String middleName;
	@Column(name = "LNAME")
	private String lastName;
	@Column(name = "FRNAME")
	private String fatherName;
	@Column(name = "MOBNO")
	private long mobileNum;
	@Column(name = "EMAIL")
	private String emailID;
	@Column(name = "AADHAR")
	private int aadharNum;
	@Column(name = "DOB")
	private LocalDate dob;

	@Column(name = "RADDRL1")
	private String rAddrLine1;
	@Column(name = "RADDRL2")
	private String rAddrLine2;
	@Column(name = "RLANDMARK")
	private String rLandmark;
	@Column(name = "RSTATE")
	private String rState;
	@Column(name = "RCITY")
	private String rCity;
	@Column(name = "RPINCODE")
	private int rPincode;

	@Column(name = "PADDRL1")
	private String mAddrLine1;
	@Column(name = "PADDRL2")
	private String mAddrLine2;
	@Column(name = "PLANDMARK")
	private String mLandmark;
	@Column(name = "PSTATE")
	private String mState;
	@Column(name = "PCITY")
	private String mCity;
	@Column(name = "PPINCODE")
	private int mPincode;

	@Column(name = "OCCP")
	private String occType;
	@Column(name = "SRCINC")
	private String sourceOfIncome;
	@Column(name = "GRSINC")
	private long grossAnnualIncome;

	@Column(name = "DEBIT")
	private int debitCard;
	@Column(name = "NETBANKING")
	private int netBanking;

	@Column(name = "BAL")
	private int balance = Integer.parseInt("0");

	@Column(name = "APPR")
	private int appr = Integer.parseInt("0");	

	@Override
	public String toString() {
		return "Account [accNo=" + accNo + ", title=" + title + ", firstName=" + firstName + ", middleName="
				+ middleName + ", lastName=" + lastName + ", fatherName=" + fatherName + ", mobileNum=" + mobileNum
				+ ", emailID=" + emailID + ", aadharNum=" + aadharNum + ", dob=" + dob + ", rAddrLine1=" + rAddrLine1
				+ ", rAddrLine2=" + rAddrLine2 + ", rLandmark=" + rLandmark + ", rState=" + rState + ", rCity=" + rCity
				+ ", rPincode=" + rPincode + ", mAddrLine1=" + mAddrLine1 + ", mAddrLine2=" + mAddrLine2
				+ ", mLandmark=" + mLandmark + ", mState=" + mState + ", mCity=" + mCity + ", mPincode=" + mPincode
				+ ", occType=" + occType + ", sourceOfIncome=" + sourceOfIncome + ", grossAnnualIncome="
				+ grossAnnualIncome + ", debitCard=" + debitCard + ", netBanking=" + netBanking + ", balance=" + balance
				+ ", appr=" + appr + "]";
	}

	public int getAccNo() {
		return accNo;
	}

	public void setAccNo(int accNo) {
		this.accNo = accNo;
	}

	public long getMobileNum() {
		return mobileNum;
	}

	public void setMobileNum(long mobileNum) {
		this.mobileNum = mobileNum;
	}

	public long getGrossAnnualIncome() {
		return grossAnnualIncome;
	}

	public void setGrossAnnualIncome(long grossAnnualIncome) {
		this.grossAnnualIncome = grossAnnualIncome;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public int getAppr() {
		return appr;
	}

	public void setAppr(int appr) {
		this.appr = appr;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getEmailID() {
		return emailID;
	}

	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}

	public int getAadharNum() {
		return aadharNum;
	}

	public void setAadharNum(int aadharNum) {
		this.aadharNum = aadharNum;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getrAddrLine1() {
		return rAddrLine1;
	}

	public void setrAddrLine1(String rAddrLine1) {
		this.rAddrLine1 = rAddrLine1;
	}

	public String getrAddrLine2() {
		return rAddrLine2;
	}

	public void setrAddrLine2(String rAddrLine2) {
		this.rAddrLine2 = rAddrLine2;
	}

	public String getrLandmark() {
		return rLandmark;
	}

	public void setrLandmark(String rLandmark) {
		this.rLandmark = rLandmark;
	}

	public String getrState() {
		return rState;
	}

	public void setrState(String rState) {
		this.rState = rState;
	}

	public String getrCity() {
		return rCity;
	}

	public void setrCity(String rCity) {
		this.rCity = rCity;
	}

	public int getrPincode() {
		return rPincode;
	}

	public void setrPincode(int rPincode) {
		this.rPincode = rPincode;
	}

	public String getmAddrLine1() {
		return mAddrLine1;
	}

	public void setmAddrLine1(String mAddrLine1) {
		this.mAddrLine1 = mAddrLine1;
	}

	public String getmAddrLine2() {
		return mAddrLine2;
	}

	public void setmAddrLine2(String mAddrLine2) {
		this.mAddrLine2 = mAddrLine2;
	}

	public String getmLandmark() {
		return mLandmark;
	}

	public void setmLandmark(String mLandmark) {
		this.mLandmark = mLandmark;
	}

	public String getmState() {
		return mState;
	}

	public void setmState(String mState) {
		this.mState = mState;
	}

	public String getmCity() {
		return mCity;
	}

	public void setmCity(String mCity) {
		this.mCity = mCity;
	}

	public int getmPincode() {
		return mPincode;
	}

	public void setmPincode(int mPincode) {
		this.mPincode = mPincode;
	}

	public String getOccType() {
		return occType;
	}

	public void setOccType(String occType) {
		this.occType = occType;
	}

	public String getSourceOfIncome() {
		return sourceOfIncome;
	}

	public void setSourceOfIncome(String sourceOfIncome) {
		this.sourceOfIncome = sourceOfIncome;
	}

	public int getDebitCard() {
		return debitCard;
	}

	public void setDebitCard(int debitCard) {
		this.debitCard = debitCard;
	}

	public int getNetBanking() {
		return netBanking;
	}

	public void setNetBanking(int netBanking) {
		this.netBanking = netBanking;
	}
}
