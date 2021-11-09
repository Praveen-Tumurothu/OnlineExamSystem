package com.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@SuppressWarnings("serial")
@Entity
public class Admin implements Serializable{
	   
	@Id
	@NotEmpty(message="username to be filled")
	@Size(min=4, message="username should have atleast two characters")
	@Column(name = "username")
	private String userName; //Username
	
	@NotEmpty(message="password to be filled")
	@Size(min=4, message="password should have atleast 8 characters")
	private String password; 
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Admin [UserName=" + userName + ", Password=" + password + "]";
	}
	
}
