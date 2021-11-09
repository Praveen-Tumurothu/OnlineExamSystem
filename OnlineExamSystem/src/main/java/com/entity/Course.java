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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@SuppressWarnings("serial")
@Entity
public class Course implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int courseId;
	
	@NotEmpty(message="course name to be filled")
	@Size(min=2,message="course name should have atleast two characters")
	private String courseName;
	
	@NotEmpty(message="course type to be filled")
	private String courseType;
	
	@NotEmpty(message="description to be filled")
	private String description;
	
	@OneToMany(targetEntity = TestPaper.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "courseId", referencedColumnName = "courseId")
	private List<TestPaper> testpaper = new ArrayList<>();;
	
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
	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", CourseName=" + courseName + ", courseType=" + courseType
				+ ", Description=" + description + "]";
	}
	
	
}
