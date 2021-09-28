package com.microservices.department.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.microservices.department.service.entity.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
	Department findDepartmentById(Long departmentId);
}
