package com.lti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lti.entity.AddNewBen;
import com.lti.service.AddNewBenService;

@RestController
public class AddNewBenController {

	@Autowired
	private AddNewBenService addnewbenservice;

	@PostMapping("/addnewben.lti")
	public void addnewBen(@RequestBody AddNewBen addnew) {
		System.out.println(addnew.toString());
		addnewbenservice.addnewBen(addnew);
	}
}
