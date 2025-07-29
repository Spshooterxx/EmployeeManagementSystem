package com.example.departmentapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.departmentapi", "com.example.employeeApi"})
@EnableJpaRepositories(basePackages = {"com.example.departmentapi", "com.example.employeeApi"})
@EntityScan(basePackages = {"com.example.departmentapi", "com.example.employeeApi"})
public class DepartmentapiApplication {
    public static void main(String[] args) {
        SpringApplication.run(DepartmentapiApplication.class, args);
    }
}
