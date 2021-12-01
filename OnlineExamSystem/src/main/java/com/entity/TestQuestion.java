package com.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

 // Suppressing Warning to omit the serialVersionUID
@Entity
public class TestQuestion implements Serializable {
	// Fields with Validations

	@Id // Specifying Primary Key
	@GeneratedValue(strategy = GenerationType.IDENTITY) // For Automatic Generation of Values
	private int id;

	@NotEmpty(message = "question to be filled")
	private String question;

	@NotEmpty(message = "option 1 to be filled")
	private String option1;

	@NotEmpty(message = "option 2 to be filled")
	private String option2;

	@NotEmpty(message = "option 3 to be filled")
	private String option3;

	@NotEmpty(message = "option 4 to be filled")
	private String option4;

	@NotNull(message = "correct answer to be filled")
	private int correctAnswer;

	@NotNull(message = "question number to be filled")
	private int questionNo;
	
	private int tpc;

	// getters and setters

	public int getTpc() {
		return tpc;
	}

	public void setTpc(int tpc) {
		this.tpc = tpc;
	}

	public String getQuestion() {
		return question;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public int getCorrectAnswer() {
		return correctAnswer;
	}

	public void setCorrectAnswer(int correctAnswer) {
		this.correctAnswer = correctAnswer;
	}

	public int getQuestionNo() {
		return questionNo;
	}

	public void setQuestionNo(int questionNo) {
		this.questionNo = questionNo;
	}

	@Override // Overriding toString method
	public String toString() {
		return "TestQuestion [id=" + id + ", question=" + question + ", option1=" + option1 + ", option2=" + option2
				+ ", option3=" + option3 + ", option4=" + option4 + ", correctAnswer=" + correctAnswer + ", questionNo="
				+ questionNo + "]";
	}
}
