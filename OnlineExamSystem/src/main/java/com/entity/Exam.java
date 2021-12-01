package com.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@SuppressWarnings("serial") // Suppressing Warning to omit the serialVersionUID
@Entity
public class Exam implements Serializable {
	// Fields with Validations

	@Id //Specifying Primary Key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // For Automatic Generation of Values
	private int examRollNo;

	private LocalDateTime dateOfExam;

	@NotNull(message = "status to be filled as true or false")
	private boolean status;

	@NotNull(message = "maximum score to be filled")
	private int maximumScore;

	private int actualScore;

	@NotNull(message = "exam duration to be filled")
	private int examDuration;

	@NotNull(message = "Is announced to student to be filled as true or false")
	private boolean isAnnouncedToStudent;
	
	private int enrollId;
	

	public int getEnrollId() {
		return enrollId;
	}

	public void setEnrollId(int enrollId) {
		this.enrollId = enrollId;
	}

	// Specifying One to One Relation
	@OneToOne(targetEntity = TestPaper.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "testPaperCode", referencedColumnName = "testPaperCode") // Joins the new column in Exam entity
																				// as testPaperCode
	private TestPaper testpaper;

	// getters and setters

	public int getExamDuration() {
		return examDuration;
	}

	public void setExamDuration(int examDuration) {
		this.examDuration = examDuration;
	}

	public void setExamRollNo(int examRollNo) {
		this.examRollNo = examRollNo;
	}

	public int getExamRollNo() {
		return examRollNo;
	}

	public LocalDateTime getDateOfExam() {
		return dateOfExam;
	}

	public void setDateOfExam(LocalDateTime localDate) {
		this.dateOfExam = localDate;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public int getMaximumScore() {
		return maximumScore;
	}

	public void setMaximumScore(int maximumScore) {
		this.maximumScore = maximumScore;
	}

	public int getActualScore() {
		return actualScore;
	}

	public void setActualScore(int actualScore) {
		this.actualScore = actualScore;
	}

	public boolean isAnnouncedToStudent() {
		return isAnnouncedToStudent;
	}

	public void setAnnouncedToStudent(boolean isAnnouncedToStudent) {
		this.isAnnouncedToStudent = isAnnouncedToStudent;
	}

	public TestPaper getTestpaper() {
		return testpaper;
	}

	public void setTestpaper(TestPaper testpaper) {
		this.testpaper = testpaper;
	}

	@Override // Overriding toString method
	public String toString() {
		return "Exam [examRollNo=" + examRollNo + ", dateOfExam=" + dateOfExam + ", status=" + status
				+ ", MaximumScore=" + maximumScore + ", actualScore=" + actualScore + ", examDuration=" + examDuration
				+ ", isAnnouncedToStudent=" + isAnnouncedToStudent + ", testpaper=" + testpaper + "]";
	}
}
