package com.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{
	
	Optional<Student> findByusername(String username);
	
	Student findBypassword(String password);
}
