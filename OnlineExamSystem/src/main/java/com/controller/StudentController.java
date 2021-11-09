package com.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DTO.StudentDTO;
import com.entity.Course;
import com.entity.Student;
import com.serviceimplementation.AdminStudentManagement;
import com.serviceimplementation.StudentExam;
import com.serviceimplementation.StudentRegister;

@RestController
@RequestMapping(path = "/student")
public class StudentController {

	@Autowired
	private StudentRegister studentservice;
	
	@Autowired
	private AdminStudentManagement adminStudentManagement;
	
	@PostMapping(path = "/login")
	public ResponseEntity<Boolean> studentLogin(@RequestBody Student s) throws Throwable {

		boolean existence = studentservice.loginStudent(s.getUsername(), s.getPassword());
		return new ResponseEntity<Boolean>(existence, HttpStatus.OK);
		

	}

	@PutMapping(path = "/updateStudent")
	public ResponseEntity<Student> updateStudent(@Valid @RequestBody StudentDTO s) throws Throwable {
		Student n = studentservice.updateStudentDetails(s);
		return new ResponseEntity<Student>(n, HttpStatus.OK);
		
	}

	@PostMapping(path = "/newRegister")
	public ResponseEntity<Student> newRegistration(@Valid @RequestBody Student s) {
		Student stu = studentservice.registerNewStudent(s);
		return new ResponseEntity<Student>(stu, HttpStatus.OK);
		
	}

	@GetMapping(path = "/getallCourses")
	public ResponseEntity<List<Course>> getAllCourses() {
		List<Course> list = studentservice.findAllCourses();
		return new ResponseEntity<List<Course>>(list, HttpStatus.OK);
		
	}

	@GetMapping(path = "/deEnrollstudent/{studentId}/{courseId}/{batchName}/{enrollmentId}")
	public ResponseEntity<Student> deEnrollStudent(@PathVariable int studentId, @PathVariable int courseId,
			@PathVariable String batchName, @PathVariable int enrollmentId) throws Throwable {
		return new ResponseEntity<Student>(adminStudentManagement.deEnRollstudent(studentId, courseId, batchName, enrollmentId), HttpStatus.OK);
		
	}
}
