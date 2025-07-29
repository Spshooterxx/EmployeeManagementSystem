import React, { useState } from "react";
import DepartmentForm from "../components/DepartmentForm";
import DepartmentList from "../components/DepartmentList";

function DepartmentPage() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [refreshDept, setRefreshDept] = useState(false);

  return (
    <div>
      <h2>Department Management</h2>
      <DepartmentForm
        selected={selectedDepartment}
        onSave={() => setRefreshDept(!refreshDept)}
      />
      <DepartmentList
        key={refreshDept}
        onEdit={setSelectedDepartment}
      />
    </div>
  );
}

export default DepartmentPage;
