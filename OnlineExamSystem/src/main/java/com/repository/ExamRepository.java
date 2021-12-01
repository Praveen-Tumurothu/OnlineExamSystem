package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Exam;

public interface ExamRepository extends JpaRepository<Exam, Integer>
{
	
}
