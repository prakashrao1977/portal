package com.microservices.department.service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.microservices.department.service.entity.Department;
import com.microservices.department.service.service.DepartmentService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/departments")
@Slf4j
public class DepartmentController {
	@Autowired
	private DepartmentService departmentService;
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(DepartmentService.class);
	
	@PostMapping("/")
	public Department saveDepartment (@RequestBody Department department)
	{
	    // Test Comment again-5
		log.info("DepartmentController.saveDepartment");
		return departmentService.saveDepartment(department);
	}
	
	@GetMapping("/{id}")
	public Department findDepartmentById (@PathVariable("id") Long departmentId)
	{
		log.info("DepartmentController.findDepartmentById "+departmentId);
		return departmentService.findDepartmentById(departmentId);
	}
}
