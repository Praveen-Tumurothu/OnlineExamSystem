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
import javax.validation.constraints.Pattern;

@SuppressWarnings("serial") // Suppressing Warning to omit the serialVersionUID
@Entity
public class TestPaper implements Serializable {
	// Fields with Validations

	@Id // Specifying Primary Key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // For Automatic Generation of Values
	private int testPaperCode;

	@NotEmpty(message = "difficult level to be filled")
	@Pattern(regexp = "^low$|^medium$|^high$|^Medium$|^Low$|^High$", message = "allowed input: low or medium or high")
	private String difficultyLevel;

	@NotEmpty(message = "description to be filled")
	private String description;
	
	private String courseName;
	

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	// Specifying One to Many Relation
	@OneToMany(targetEntity = TestQuestion.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "testPaperCode", referencedColumnName = "testPaperCode")
	private List<TestQuestion> testquestion = new ArrayList<>();

	// getters and setters

	public int getTestPaperCode() {
		return testPaperCode;
	}

	public void setTestPaperCode(int testPaperCode) {
		this.testPaperCode = testPaperCode;
	}

	public String getDifficultyLevel() {
		return difficultyLevel;
	}

	public void setDifficultyLevel(String difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<TestQuestion> getTestquestion() {
		return testquestion;
	}

	public void addTestquestion(TestQuestion testquestion) {
		this.testquestion.add(testquestion);
	}

	public void removeTestquestion(TestQuestion testquestion) {
		this.testquestion.remove(testquestion);
	}

	@Override // Overriding toString method
	public String toString() {
		return "TestPaper [testPaperCode=" + testPaperCode + ", difficultyLevel=" + difficultyLevel + ", description="
				+ description + ", testquestion=" + testquestion + "]";
	}

}
