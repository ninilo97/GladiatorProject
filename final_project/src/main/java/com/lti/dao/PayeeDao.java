package com.lti.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.lti.entity.Payee;

@Repository
public class PayeeDao {
	
	@PersistenceContext
	protected EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	public List<Payee> getPayeeList(int accNo) {
		String query  = "Select p from Payee p where p.account.accNo=:accNo";
		Query q = entityManager.createQuery(query);
		q.setParameter("accNo", accNo);
		return (List<Payee>) q.getResultList();
	}
}
