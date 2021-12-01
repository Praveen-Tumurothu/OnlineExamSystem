package com.DTO;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class StudentDTO {
	private Integer studentId;
	// Fields
	@NotEmpty(message = "username to be filled")
	@Size(min = 4, message = "username should have atleast two characters")
	private String username;

	@NotEmpty(message = "password to be filled")
	@Size(min = 8, message = "password should have atleast 8 characters")
	private String password;

	private String firstName;
	private String lastName;
	private String gender;
	private String email;

	// getters and setters
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	private String mobileNo;

	public Integer getStudentId() {
		return studentId;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getGender() {
		return gender;
	}

	public String getEmail() {
		return email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

}
