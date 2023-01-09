package com.finishing_school.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.finishing_school.model.Users;
import com.finishing_school.model.address;

@Service
public class UserService {

	public List<Users> getAllUsers() {
		List<Users> users = new ArrayList<Users>();
		users.add(new Users(1, "adapa", "adapa@gmail.com",90,new address("hyderabad","Telangana")));
		users.add(new Users(2, "sai", "sai@gmail.com",150,new address("jaipur","Rajasthan")));
		users.add(new Users(3, "naga", "naga@gmail.com",120,new address("amaravati","Andhra Pradesh")));
		users.add(new Users(4, "rohan", "rohan@gmail.com",110,new address("lucknow","Uttar Pradesh")));
		return users;
	}

	public List<Users> getById(int id) {
		return getAllUsers().stream().filter(user -> user.getId() == id).collect(Collectors.toList());
	}

	public List<Users> getByName(String name) {
		return getAllUsers().stream().filter(userName -> userName.getName().startsWith(name)).collect(Collectors.toList());
	}
	
	public List<address> getByAddress(String name) {
		return getAllUsers().stream().filter(userName -> userName.getName().startsWith(name)).map(address -> address.getAddress()).collect(Collectors.toList());
	}
	
}
