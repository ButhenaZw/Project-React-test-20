import React, { useState, useEffect } from "react";
import SForm from "./SForm";
import Activity from "./Activity";

function Dashboard() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div>
      <SForm setStudents={setStudents} students={students} />
      <Activity students={students} /> {/* Ensure students is passed */}
    </div>
  );
}

export default Dashboard;
