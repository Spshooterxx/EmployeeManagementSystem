import React, { useState, useEffect } from "react";
import { addEmployee, updateEmployee } from "../services/employeeService";

export default function EmployeeForm({ selected, onSave }) {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        phone: "",
        jobTitle: "",
        salary: ""
    });

    useEffect(() => {
        if (selected) setEmployee(selected);
    }, [selected]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (employee.employeeId) {
            await updateEmployee(employee.employeeId, employee);
        } else {
            await addEmployee(employee);
        }
        setEmployee({
            name: "",
            email: "",
            phone: "",
            jobTitle: "",
            salary: ""
        });
        onSave();
    };

    return (
        <div className="container mt-4">
           <div className="card shadow" style={{ width: "500px" }}>
                <div className="card-body">
                    <h2 className="card-title mb-4 text-primary">
                        {employee.employeeId ? "Edit" : "Add"} Employee
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                name="name"
                                value={employee.name}
                                onChange={handleChange}
                                placeholder="Enter name"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={employee.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                name="phone"
                                value={employee.phone}
                                onChange={handleChange}
                                placeholder="Enter phone"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job Title</label>
                            <input
                                name="jobTitle"
                                value={employee.jobTitle}
                                onChange={handleChange}
                                placeholder="Enter job title"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Salary</label>
                            <input
                                name="salary"
                                type="number"
                                value={employee.salary}
                                onChange={handleChange}
                                placeholder="Enter salary"
                                required
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
