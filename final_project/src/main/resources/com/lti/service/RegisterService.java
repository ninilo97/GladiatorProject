package com.lti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lti.dao.GenericDao;
import com.lti.entity.Account;

@Service
public class RegisterService {
	
	@Autowired
	private GenericDao gdao;
	
	@Transactional
	public void registerAccount(Account acc) {
		gdao.save(acc);
	}

	/*
	@Transactional
	public int addProject(Project proj) {
		Project updatedProj = (Project) dao.save(proj);
		return updatedProj.getId();
	}
	
	public List<Employee> listAll(){
		return dao.fetchAll(Employee.class);
	}
		
	public List<Project> listAllProj(){
		return dao.fetchAll(Project.class);
	}
	
	@Transactional
	public void assignProjectToEmployee(int projectId, int empno) {
		Project proj = dao.fetchById(Project.class, projectId);
		Employee emp = dao.fetchById(Employee.class, empno);
		proj.setEmployee(emp);
		dao.save(proj);
	}
	*/
}
