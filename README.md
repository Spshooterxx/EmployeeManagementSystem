# 🧑‍💼 Employee Management System

This is a Full-Stack Employee Management System It supports **Employee** and **Department** CRUD operations using:

- ASP.NET Core Web API for Employee (Backend - MSSQL)
- Spring Boot API for Department (Backend - MySQL)
- Angular (Department Frontend)
- React (Employee Frontend)

---
 📁 Project Structure

EmployeeManagementSystem/
│
├── backend/
│ ├── aspnet-employee-api/ # ASP.NET Core Web API (MSSQL)
│ └── springboot-department-api/ # Spring Boot API (MySQL)
│
├── frontend/
│ ├── angular-department-ui/ # Angular App (Department UI)
│ └── react-employee-ui/ # React App (Employee UI)
│
├── database/
│ ├── init-mssql.sql # MSSQL script for Employee table
│ └── init-mysql.sql # MySQL script for Department table
│
├── assets/
│ ├── screenshots/ # Screenshots for demo
│ └── ERD.png # ER Diagram
│
└── README.md
---

⚙️ Tech Stack

| Layer      | Tech Used                    |
|------------|------------------------------|
| Frontend   | React (Employee), Angular (Department) |
| Backend    | ASP.NET Core (Employee), Spring Boot (Department) |
| Database   | Microsoft SQL Server, MySQL  |
| API Client | Axios, Fetch API             |
| Styling    | Bootstrap                    |

---

🛠 Setup Instructions
.NET

cd backend
cd .net
dotnet run
Ensure appsettings.json points to your MSSQL database.

Spring Boot API (Department)

cd backend
cd sprinbootAPI
./mvnw spring-boot:run
Ensure application.properties has correct MySQL credentials.

4. Frontend Setup
Angular (Department UI)
cd frontend
cd angular
ng serve


React (Employee UI)
cd frontend
cd react
npm install
npm start

✅ Features
Create, Read, Update, Delete (CRUD) for both Employee and Department.

Separated architecture for each module.

RESTful APIs for both services.

Responsive design with Bootstrap.

Clear frontend-backend separation for scalability.

👨‍💻 Author
Supun Prabath C147986

**DATABASE**
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2025 at 05:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fullstack_assignment_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `location`) VALUES
(1, 'supun prabath', '-');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `employee_id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `job_title` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `salary` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`employee_id`, `name`, `email`, `phone`, `job_title`, `department_id`, `salary`) VALUES
(2, 'supun prabat', 'spshooterxx@gmail.com', '07752751260', 'developer', NULL, 50000);

-- --------------------------------------------------------

--
-- Table structure for table `__efmigrationshistory`
--

CREATE TABLE `__efmigrationshistory` (
  `MigrationId` varchar(150) NOT NULL,
  `ProductVersion` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `__efmigrationshistory`
--
ALTER TABLE `__efmigrationshistory`
  ADD PRIMARY KEY (`MigrationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



📄 License
This project is for educational purposes only.
