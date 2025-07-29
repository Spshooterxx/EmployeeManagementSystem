import React, { useEffect, useState } from "react";
import { getAllDepartments, deleteDepartment } from "../services/departmentService";

export default function DepartmentList({ onEdit }) {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();

      console.log("Raw API Response:", response.data);

      let rawDepartments = [];

      if (Array.isArray(response.data)) {
        rawDepartments = response.data;
      } else if (Array.isArray(response.data.data)) {
        rawDepartments = response.data.data;
      } else {
        console.error("Unexpected API response format.");
        setDepartments([]);
        return;
      }

      // 🧹 Sanitize the department data to remove circular references
      const cleanedDepartments = rawDepartments.map((dept) => ({
        id: dept.id,
        name: dept.name,
        location: dept.location,
      }));

      setDepartments(cleanedDepartments);
    } catch (error) {
      console.error("Failed to fetch departments:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      await deleteDepartment(id);
      fetchDepartments(); // Refresh the list
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Department List</h2>
      <table className="table table-bordered table-striped shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th style={{ width: "160px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No departments found.</td>
            </tr>
          ) : (
            departments.map((dept) => (
              <tr key={dept.id}>
                <td>{dept.name}</td>
                <td>{dept.location}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => onEdit(dept)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(dept.id)}
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
