"use client";

import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";

interface rowData {
  id?: number;
  DisplayName: string;
  EmployeeID?: number;
  Designation: string;
  Employee_Type: string;
  Experience: string;
  EditBtn: any;
}

export default function DataTable() {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState<Array<Object>>([]);
  const [selectionRowID, setSelection] = useState<GridSelectionModel>([]);

  // Avoid a layout jump when reaching the last page with empty rows.

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/employees`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((backendData) => setData(backendData.employeeData));
    const rowInput = data?.map((el: any, i): rowData => {
      return {
        id: el?.EmployeeID,
        DisplayName: el?.DisplayName,
        Designation: el?.Designation,
        Employee_Type: el?.Employee_Type.replace("_", " "),
        EmployeeID: el?.EmployeeID,
        Experience: `${el?.Experience} Years`,
        EditBtn: <div></div>,
      };
    });
    setRows(rowInput);
  }, [data, selectionRowID]);

  const handleEmployeeEdit = () => {};
  const handleEmployeeDelete = () => {
    fetch(`${process.env.BACKEND_URL}/employees/${selectionRowID}`, {
      method: "DELETE",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const columns: GridColDef[] = [
    { field: "DisplayName", headerName: "Display Name", width: 200 },
    { field: "EmployeeID", headerName: "Emp ID", width: 200 },
    { field: "Designation", headerName: "Designation", width: 200 },
    { field: "Employee_Type", headerName: "Emp. Type", width: 200 },
    { field: "Experience", headerName: "Experience", width: 200 },
    {
      field: "EditBtn",
      headerName: "",
      width: 200,
      renderCell: (params) => (
        <div className="flex space-x-4 ">
          <p
            onClick={handleEmployeeEdit}
            className="text-defaultBlue text-sm hover:underline cursor-pointer"
          >
            Edit
          </p>
          <p
            onClick={handleEmployeeDelete}
            className="text-red-600 text-sm hover:underline cursor-pointer"
          >
            Delete
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className=" p-[32px]  h-[450px] w-[1300px] mx-auto">
      <div className="h-[32px] flex items-center w-full ">
        <h1 className="text-xl font-semibold">People</h1>
      </div>
      <div className="   flex-row space-x-[32px] justify-end items-center flex px-4 py-3 text-right sm:px-6">
        <select
          title="EmpType"
          id="EmpType"
          name="EmpType"
          className="mt-2  block  rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Full Time</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <button className="inline-flex justify-center rounded-md bg-[#0052EA] py-[10px] px-[16px] text-formBody text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Add People
        </button>
      </div>
      <div className=" h-full w-full ">
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
          onSelectionModelChange={setSelection}
          initialState={{ pagination: { page: 0, pageSize: 5 } }}
        />
      </div>
    </div>
  );
}
