package com.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@SuppressWarnings("serial") // Suppressing Warning to omit the serialVersionUID
@Entity
public class StudentEnrollment implements Serializable {
	// Fields with Validations

	@Id // Specifying Primary Key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // For Automatic Generation of Values
	private int enrollmentId;

	@NotEmpty(message = "batch name to be filled")
	@Size(min = 2, message = "batch name should have atleast two characters")
	private String batchName;

	private LocalDate enrollmentDate;

	private Date completionDate;

	@NotNull(message = "status to be filled as true or false")
	private boolean status;
	
//	
//	@Column(nullable=false)
	private int sId;
	
	public int getsId() {
		return sId;
	}

	public void setsId(int sId) {
		this.sId = sId;
	}

	// Specifying One to One Relation
	@OneToOne(targetEntity = Course.class)
	@JoinColumn(name = "courseId", referencedColumnName = "courseId") // Joins the new column in Exam StudentEnrollment
	// as courseId
	private Course course;

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	// Specifying One to Many Relation
	@OneToMany(targetEntity = Exam.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "enrollmentId", referencedColumnName = "enrollmentId")
	private List<Exam> exam = new ArrayList<>();

	// getters and setters
	public int getEnrollmentId() {
		return enrollmentId;
	}

	public List<Exam> getExam() {
		return exam;
	}

	public void addExam(Exam exam) {
		this.exam.add(exam);
	}

	public void removeExam(Exam exam) {
		this.exam.remove(exam);
	}

	public String getBatchName() {
		return batchName;
	}

	public void setBatchName(String batchName) {
		this.batchName = batchName;
	}

	public LocalDate getEnrollmentDate() {
		return enrollmentDate;
	}

	public void setEnrollmentDate(LocalDate date) {
		this.enrollmentDate = date;
	}

	public Date getCompletionDate() {
		return completionDate;
	}

	public void setCompletionDate(Date completionDate) {
		this.completionDate = completionDate;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public void setEnrollmentId(int enrollmentId) {
		this.enrollmentId = enrollmentId;
	}

	@Override // Overriding toString method
	public String toString() {
		return "StudentEnrollment [enrollmentId=" + enrollmentId + ", batchName=" + batchName + ", enrollmentDate="
				+ enrollmentDate + ", completionDate=" + completionDate + ", status=" + status + ", course=" + course
				+ ", exam=" + exam + "]";
	}

}
