package com.finishing_school;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.finishing_school.controller.Controller;
import com.finishing_school.model.Users;
import com.finishing_school.model.address;
import com.finishing_school.service.UserService;

@WebMvcTest(Controller.class)
class UserControllerTest {

	@Autowired
	private MockMvc mockMVC;
	
	@MockBean
	private UserService service;
	
	
	@Test
    public void getAllUsersTest() throws Exception {
		
		List<Users> user = new ArrayList<Users>();
		user.add(new Users(1, "sai", "sai@gmail.com",150,new address("jaipur","Rajasthan")));
		user.add(new Users(2, "Adapa", "Adapa@gmail.com",110,new address("Hyderabad","Telangana")));
		
		when(service.getAllUsers()).thenReturn(user);
		
		mockMVC.perform(get("/users"))
		.andExpect(status().is(200))
		.andExpect(MockMvcResultMatchers.jsonPath("$").exists());
		
	}
	
	@Test
    public void getUserNameTest() throws Exception {
		
		List<Users> user = new ArrayList<Users>();
		user.add(new Users(1, "sai", "sai@gmail.com",150,new address("jaipur","Rajasthan")));
		
		when(service.getByName(anyString())).thenReturn(user);
		
		mockMVC.perform(get("/usersName/sai"))
		.andExpect(MockMvcResultMatchers.jsonPath("$.[0].id").value(1))
		.andExpect(status().is(200))
		.andExpect(MockMvcResultMatchers.jsonPath("$.[0].name").value("sai"))
		.andExpect(MockMvcResultMatchers.jsonPath("$.[0].email").value("sai@gmail.com"));
	}
	
	@Test
    public void getUserAddressTest() throws Exception {
		
		List<address> address = new ArrayList<address>();
		address.add(0, new address("jaipur", "Rajasthan"));
		
		when(service.getByAddress(anyString())).thenReturn(address);
		
		mockMVC.perform(get("/address/sai"))
		.andExpect(MockMvcResultMatchers.jsonPath("$.[0].city").value("jaipur"))
		.andExpect(status().is(200))
		.andExpect(MockMvcResultMatchers.jsonPath("$.[0].state").value("Rajasthan"));
	}

}
