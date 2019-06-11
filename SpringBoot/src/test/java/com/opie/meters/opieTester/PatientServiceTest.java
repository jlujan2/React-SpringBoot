package com.opie.meters.opieTester;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.opie.meters.opieTester.controller.PatientController;
import com.opie.meters.opieTester.entity.Patient;

@RunWith(SpringRunner.class)
@WebMvcTest(value = PatientController.class)
public class PatientServiceTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private PatientController patientService;
	
	Patient MockPatient = new Patient(1,"Jimmy", "Smith", new Date(), "sick", "comments more", "user@user.com");
	
	
//	@Test
//	public void whenFinPatientById_thenReturnPatient() throws Exception {
//		
//		Mockito.when(patientService.getPatientById(Mockito.anyInt())).thenReturn(MockPatient);
//		
//		RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/demo/get-patient?id=1").accept(MediaType.APPLICATION_JSON);
//		
//		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
//		
//		String expected = "{id:1, name:Jimmy, lastName:Smith}";
//		
//		JSONAssert.assertEquals(expected, result.getResponse()
//				.getContentAsString(), false);
//		
//				
//	}
}
