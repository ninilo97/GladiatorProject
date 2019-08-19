package com.lti.dao;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.lti.dto.DateRange;
import com.lti.entity.OAccount;
import com.lti.entity.TransactionEntity;

@Repository
public class OAccountDao {

	@PersistenceContext
	protected EntityManager entityManager;
	
	public OAccount fetchByOAccountFid(int accNo) {
		String query  = "Select oa from OAccount oa where oa.acc.accNo=:accNo";
		Query q = entityManager.createQuery(query);
		q.setParameter("accNo", accNo);
		return (OAccount)q.getSingleResult();
	}
	
	public List<TransactionEntity> fetchTx(int accNo) {
		String query  = "Select tx from TransactionEntity tx where tx.account.accNo=:accNo order by tx.txDate desc";
		Query q = entityManager.createQuery(query);
		q.setParameter("accNo", accNo);
		return (List<TransactionEntity>) q.getResultList();
	}

	public List<TransactionEntity> fetchTxDate(DateRange dateRange) {
		String query  = "Select tx from TransactionEntity tx where tx.account.accNo=:accNo and tx.txDate between :date1 and :date2 order by tx.txDate desc";
		Query q = entityManager.createQuery(query);
		
		System.out.println(dateRange.getDate1().atStartOfDay());
		
		Timestamp timestamp1 = Timestamp.valueOf(dateRange.getDate1().atStartOfDay());
		Timestamp timestamp2 = Timestamp.valueOf(dateRange.getDate2().atStartOfDay());

		System.out.println(timestamp1.toString());
		
		q.setParameter("accNo", dateRange.getAccNo());
		q.setParameter("date1", timestamp1);
		q.setParameter("date2", timestamp2);
		return (List<TransactionEntity>) q.getResultList();
	}
	
}
