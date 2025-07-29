import React, { useEffect, useState } from "react";
import { addDepartment, updateDepartment } from "../services/departmentService";

export default function DepartmentForm({ selected, onSave }) {
    const [department, setDepartment] = useState({ name: "", location: "" });

    useEffect(() => {
        if (selected) setDepartment(selected);
    }, [selected]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (department.id) {
            await updateDepartment(department.id, department);
        } else {
            await addDepartment(department);
        }
        setDepartment({ name: "", location: "" });
        onSave();
    };

    return (
        <div className="container mt-4">
            <div className="card shadow" style={{ width: "500px" }}>
                <div className="card-body">
                    <h2 className="card-title mb-4 text-primary">
                        {department.id ? "Edit" : "Add"} Department
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Department Name</label>
                            <input
                                id="name"
                                name="name"
                                value={department.name}
                                onChange={handleChange}
                                placeholder="Enter department name"
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input
                                id="location"
                                name="location"
                                value={department.location}
                                onChange={handleChange}
                                placeholder="Enter location"
                                required
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
