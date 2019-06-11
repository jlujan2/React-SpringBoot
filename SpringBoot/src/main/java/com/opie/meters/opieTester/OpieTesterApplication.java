package com.opie.meters.opieTester;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.opie.meters.opieTester.controller.PatientController;
import com.opie.meters.opieTester.service.PatientService;

@SpringBootApplication
@ComponentScan(basePackageClasses = {PatientController.class, PatientService.class})
public class OpieTesterApplication {

	public static void main(String[] args) {
		SpringApplication.run(OpieTesterApplication.class, args);
	}

}
