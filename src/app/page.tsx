"use client";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "./components/Modal";
import AddEmployeeModal from "./components/AddEmployeeModal";
import DataTable from "./components/DataTable";
import BasicModal from "./components/Modal";

const inter = Inter({ variable: "--inter-font", subsets: ["latin"] });

interface EmployeeType {
  Employee_Type: string;
}
interface Employee {
  employeeData: Array<Object>;
  distinctEmpTypes: Array<EmployeeType>;
}

export default function Home() {
  const [Employee, setEmployee] = useState<Employee>();
  const [FormData, setFormData] = useState({});
  const [SelectEmpType, setEmployeeType] = useState("");

  const handleEmpTypeSelect = (
    e: React.SyntheticEvent<HTMLSelectElement, Event>
  ) => {
    console.log(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/employees/`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => setEmployee(data));
    console.log(SelectEmpType);
  }, [SelectEmpType]);
  console.log(Employee);

  return (
    <div className=" h-screen w-screen">
      <AddEmployeeModal />
    </div>
  );
}
