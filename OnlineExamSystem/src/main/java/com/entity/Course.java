package com.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@SuppressWarnings("serial") // Suppressing Warning to omit the serialVersionUID
@Entity
public class Course implements Serializable {

	// Fields with Validations

	@Id // Specifing Primary Key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // For Automatic Generation of Values
	private int courseId;

	@NotEmpty(message = "course name to be filled")
	@Size(min = 2, message = "course name should have atleast two characters")
	private String courseName;

	@NotEmpty(message = "course type to be filled")
	private String courseType;
	
	private String batchName;

	public String getBatchName() {
		return batchName;
	}

	public void setBatchName(String batchName) {
		this.batchName = batchName;
	}

	@NotEmpty(message = "description to be filled")
	private String description;
	
	private String image;

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	// Specifying One to Many Relation
	@OneToMany(targetEntity = TestPaper.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "courseId", referencedColumnName = "courseId") // Joins the new column in testpaper entity as
																		// courseId
	private List<TestPaper> testpaper = new ArrayList<>();;

	// getters and setters
	public List<TestPaper> getTestpaper() {
		return testpaper;
	}

	public void addTestpaper(TestPaper testpaper) {
		this.testpaper.add(testpaper);
	}

	public void removeTestpaper(TestPaper testpaper) {
		this.testpaper.remove(testpaper);
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseType() {
		return courseType;
	}

	public void setCourseType(String courseType) {
		this.courseType = courseType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	// Overriding toString method
	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", CourseName=" + courseName + ", courseType=" + courseType
				+ ", Description=" + description + "]";
	}

}
