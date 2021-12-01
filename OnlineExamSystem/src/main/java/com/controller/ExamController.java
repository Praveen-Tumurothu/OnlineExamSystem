package com.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DTO.ExamFormDTO;
import com.DTO.TestQuestionDTO;
import com.advices.DataNotFoundedException;
import com.entity.Exam;
import com.serviceimplementation.StudentExam;

@RestController
@RequestMapping("/exam")
@CrossOrigin(origins = "http://localhost:3000/")
public class ExamController {
	@Autowired
	StudentExam studentexamservice;

	@GetMapping("/start_test/{examRollNo}")
	public ResponseEntity<List<TestQuestionDTO>> startTest(@PathVariable int examRollNo) throws Throwable {
		return new ResponseEntity<List<TestQuestionDTO>>(studentexamservice.startTest(examRollNo), HttpStatus.OK);

	}

	@PostMapping("/submitTest")
	public ResponseEntity<Exam> submitTest(@Valid @RequestBody List<ExamFormDTO> examFormDto)
			throws DataNotFoundedException {
		return new ResponseEntity<Exam>(studentexamservice.submitTest(examFormDto), HttpStatus.OK);

	}

	@GetMapping("/getResult/{examRollNo}")
	public ResponseEntity<Exam> getResult(@PathVariable int examRollNo) throws Throwable {
		return new ResponseEntity<Exam>(studentexamservice.getResultByExamRollNo(examRollNo), HttpStatus.OK);

	}

	@GetMapping("/getAllResults/{studentid}/{enrollId}")
	public ResponseEntity<List<Exam>> getResults(@PathVariable int studentid, @PathVariable int enrollId)
			throws Throwable {
		return new ResponseEntity<List<Exam>>(studentexamservice.findAllResults(studentid, enrollId), HttpStatus.OK);

	}

	@GetMapping("/searchResults/{courseName}/{enrollmentId}")
	public ResponseEntity<List<Exam>> getResultsByCourseName(@PathVariable String courseName,
			@PathVariable int enrollmentId) throws Throwable {
		return new ResponseEntity<List<Exam>>(studentexamservice.searchResultsByCourseName(courseName, enrollmentId),
				HttpStatus.OK);

	}

}
