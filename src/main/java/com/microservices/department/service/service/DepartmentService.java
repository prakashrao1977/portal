package com.microservices.department.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microservices.department.service.entity.Department;
import com.microservices.department.service.repository.DepartmentRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class DepartmentService {

	@Autowired
	private DepartmentRepository departmentRepository;
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(DepartmentService.class);

	public Department saveDepartment(Department department) {
		log.info("DepartmentService.saveDepartment");
		return departmentRepository.save(department);
	}

	public Department findDepartmentById(Long departmentId) {
		log.info("DepartmentService.findDepartmentById "+departmentId);
		return departmentRepository.findDepartmentById(departmentId);
	}
}
