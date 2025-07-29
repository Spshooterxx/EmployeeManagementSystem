import React, { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function EmployeePage() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [refreshEmp, setRefreshEmp] = useState(false);

  return (
    <div>
      <h2>Employee Management</h2>
      <EmployeeForm
        selected={selectedEmployee}
        onSave={() => setRefreshEmp(!refreshEmp)}
      />
      <EmployeeList
        key={refreshEmp}
        onEdit={setSelectedEmployee}
      />
    </div>
  );
}

export default EmployeePage;
