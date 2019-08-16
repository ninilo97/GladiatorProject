package com.lti.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.lti.entity.OAccount;

@Repository
public class LoginDao {

	@PersistenceContext
	protected EntityManager entityManager;

	public OAccount fetchByAccNo(int accNo) {
		String query  = "Select oa from OAccount oa where ACCNO=:accNo";
		Query q = entityManager.createQuery(query);
		System.out.println(accNo);
		q.setParameter("accNo", accNo);
		return (OAccount)q.getSingleResult();
	}
}
