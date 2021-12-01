package com.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.entity.StudentEnrollment;

public interface StudentEnrollmentRepository extends JpaRepository<StudentEnrollment, Integer>
{

	@Query("FROM StudentEnrollment se WHERE se.batchName = :batchName")
	Optional<List<StudentEnrollment>> findBybatchName(@Param("batchName") String batchName); //sfgs
	
	@Query("FROM StudentEnrollment se WHERE se.course.courseId = :courseid")
	Optional<List<StudentEnrollment>> findAllBycourseId(@Param("courseid") int courseid);
	
	
}
