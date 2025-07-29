# 🧑‍💼 Employee Management System

This is a Full-Stack Employee Management System It supports **Employee** and **Department** CRUD operations using:

- ASP.NET Core Web API for Employee (Backend - MSSQL)
- Spring Boot API for Department (Backend - MySQL)
- Angular (Department Frontend)
- React (Employee Frontend)

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

📄 License
This project is for educational purposes only.
