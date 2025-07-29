import React, { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../services/employeeService";

export default function EmployeeList({ onEdit }) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await getAllEmployees();
        setEmployees(response.data);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            await deleteEmployee(id);
            fetchEmployees();
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-primary">Employee List</h2>
            <table className="table table-bordered table-striped shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Job Title</th>
                        <th>Salary</th>
                        <th style={{ width: "160px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="text-center">No employees found.</td>
                        </tr>
                    ) : (
                        employees.map((emp) => (
                            <tr key={emp.employeeId}>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.phone}</td>
                                <td>{emp.jobTitle}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-sm btn-warning"
                                            onClick={() => onEdit(emp)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(emp.employeeId)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
