package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.Account;
import com.lti.service.RegisterService;


@RestController
public class RegisterController {

	@Autowired
	private RegisterService registerService;
	
	@PostMapping("/registerAccount.lti")
	public void registerAccount(@RequestBody Account acc) {
		System.out.println(acc.toString());
		registerService.registerAccount(acc);
	}
	/*
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/addProject.lti")
	public Status addProj(@RequestBody Project proj) {
	 	int projno=employeeService.addProject(proj);
		Status status = new Status();
		status.setMessage("Project added!");
		status.setGeneratedId(projno);
		return status;
		}
	
	@PostMapping("/listAll.lti")
	public List<Employee> listAll() {
		return employeeService.listAll();
		}
	
	@PostMapping("/listAllProj.lti")
	public List<Project> listAllProj() {
		return employeeService.listAllProj();
		}
	
	@GetMapping("/assignProjToEmp.lti")
	public Status assign(@RequestParam("id")int id,@RequestParam("empno") int empno) {
		employeeService.assignProjectToEmployee(id, empno);
		Status status = new Status();
		status.setMessage("Project assigned!");
		status.setGeneratedId(id);
		return status;
	}
	*/
}
