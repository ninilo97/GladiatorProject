package com.lti.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.dao.GenericDao;
import com.lti.dao.OAccountDao;
import com.lti.dto.Transfer;
import com.lti.entity.Account;
import com.lti.entity.OAccount;
import com.lti.entity.TransactionEntity;

@Service
public class OAccountServiceImpl implements OAccountService {

	@Autowired
	private GenericDao gdao;
	
	@Autowired
	private OAccountDao dao;

	@Transactional
	public void saveOAccount(OAccount oacc) {
		gdao.save(oacc);
	}

	public Account fetchAccountById(int accNo) {
		return gdao.fetchById(Account.class, accNo);
	}

	public OAccount fetchByOAccountFid(int accNo) {
		return dao.fetchByOAccountFid(accNo);
	}
	
	@Transactional
	public void delete(OAccount oAccount) {
		gdao.delete(oAccount);
	}
	
	public List<TransactionEntity> fetchTx(int accNo) {
		return dao.fetchTx(accNo);
	}
	
	@SuppressWarnings("finally")
	@Transactional
	public boolean transfer(Transfer transfer) {
		boolean flag = false;
		try {
			Account fromAccount = gdao.fetchById(Account.class, Integer.parseInt(transfer.getFromAccNo()));
			Account toAccount = gdao.fetchById(Account.class, Integer.parseInt(transfer.getToAccNo()));

			int amount = Integer.parseInt(transfer.getAmount());
			if (amount > Integer.parseInt(fromAccount.getBalance()))
				return false;

			fromAccount.setBalance(Integer.toString(Integer.parseInt(fromAccount.getBalance()) - amount));
			toAccount.setBalance(Integer.toString(Integer.parseInt(toAccount.getBalance()) + amount));

			gdao.save(fromAccount);
			gdao.save(toAccount);

			TransactionEntity tx = new TransactionEntity();

			LocalDateTime dateTime = LocalDateTime.now();
			
			tx.setTxDetails("Money send to " + toAccount.getFirstName());
			tx.setTxDate(dateTime);
			tx.setTxType("Withdraw");
			tx.setTxAmount(Integer.toString(amount));
			tx.setTxbal(fromAccount.getBalance());
			tx.setAccount(fromAccount);
			gdao.save(tx);

			tx.setTxDetails("Money received from " + fromAccount.getFirstName());
			tx.setTxDate(dateTime);
			tx.setTxType("Deposit");
			tx.setTxAmount(Integer.toString(amount));
			tx.setTxbal(toAccount.getBalance());
			tx.setAccount(toAccount);
			gdao.save(tx);
			
			flag = true;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return flag;
		}
	}
}
