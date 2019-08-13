package com.lti.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.lti.dao.GenericDao;
import com.lti.entity.AddNewBen;

@Service
public class AddNewBenService {
	
	@Autowired
	private GenericDao gdao;
	
	@Transactional
	public void addnewBen(AddNewBen addnew)
	{
		gdao.save(addnew);
	}

}
