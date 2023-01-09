package com.finishing_school.model;

import org.springframework.beans.factory.annotation.Autowired;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Users {

	private int id;
	private String name;
	private String email;
	private int creditScore;
	@Autowired
	private address address;
	
}
