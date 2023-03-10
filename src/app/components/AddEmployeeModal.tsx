"use client";
import React, { ReactEventHandler, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface EmployeeType {
  Employee_Type: string;
}
interface Employee {
  employeeData: Array<Object>;
  distinctEmpTypes: Array<EmployeeType>;
}

function AddEmployeeModal({ close }: any) {
  const [Employee, setEmployee] = useState<Employee>();
  const [FullNameTxt, setFullName] = useState("");
  const [Name_With_InitialsTxt, setNameWithInitials] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState(0);
  const [designation, setDesignation] = useState("");
  const [SelectEmpType, setEmployeeType] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [experienceYears, setExperienceYears] = useState(0);
  const [salary, setSalary] = useState(0.0);
  const [personalNotes, setPersonalNotes] = useState("");
  const [FormData, setFormData] = useState({});

  const handleEmpTypeSelect = (
    e: React.SyntheticEvent<HTMLSelectElement, Event>
  ) => {
    e.preventDefault();
    setEmployeeType(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/employees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: "cors",
        body: JSON.stringify(FormData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.error(error);
    }
    console.log(FormData);
  };

  useEffect(() => {
    setFormData({
      FullName: FullNameTxt,
      Name_With_Initials: Name_With_InitialsTxt,
      DisplayName: displayName,
      Designation: designation,
      Gender: gender,
      Date_of_Birth: dateOfBirth,
      Email: email,
      Mobile_Number: mobileNo.toString(),
      Joined_Date: joinedDate,
      Salary: salary,
      Experience: experienceYears,
      Personal_Notes: personalNotes,
      Employee_Type: SelectEmpType,
    });
  }, [
    FullNameTxt,
    Name_With_InitialsTxt,
    displayName,
    dateOfBirth,
    designation,
    gender,
    email,
    mobileNo,
    joinedDate,
    salary,
    experienceYears,
    personalNotes,
    SelectEmpType,
  ]);
  console.log(FormData);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/employees`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => setEmployee(data));
    console.log(SelectEmpType);
  }, [SelectEmpType]);
  console.log(Employee);
  return (
    <div className="  border ">
      <div className=" mx-auto  ">
        <div className=" flex-col">
          <div className=" ">
            <div className="md:col-span-1"></div>
            <div className="mt-5 md:col-span-2 md:mt-0 w-[830px] h-[880px]">
              <form
                method="POST"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-[24px] py-1 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="md:col-span-6 flex justify-between">
                        <h3 className=" text-base font-semibold leading-6 text-black">
                          Add People
                        </h3>
                        <button onClick={close}>
                          <CloseIcon className="hover:text-red-600" />
                        </button>
                      </div>
                      <div className="border-y w-full md:col-span-6"></div>
                      <div className="col-span-6 ">
                        <label
                          htmlFor="full-name"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Full Name*
                        </label>
                        <input
                          type="text"
                          name="FullName"
                          id="full-name"
                          onChange={(e) => setFullName(e.target.value)}
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="col-span-3 sm:col-span-3">
                        <label
                          htmlFor="name_initials"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Name with Initials*
                        </label>
                        <input
                          type="text"
                          name="Name_With_Initials"
                          id="name_initials"
                          onChange={(e) => setNameWithInitials(e.target.value)}
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="col-span-3">
                        <label
                          htmlFor="display-name"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Preferred / Display Name
                        </label>
                        <input
                          type="text"
                          name="DisplayName"
                          id="display-name"
                          onChange={(e) => setDisplayName(e.target.value)}
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="col-span-3">
                        <label
                          htmlFor="gender"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Gender
                        </label>
                        <input
                          type="text"
                          name="Gender"
                          id="gender"
                          onChange={(e) => setGender(e.target.value)}
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="col-span-3">
                        <label
                          htmlFor="date_of_birth"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="date_of_birth"
                          id="date_of_birth"
                          onChange={(e) =>
                            setDOB(new Date(e.target.value).toISOString())
                          }
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="Email"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="col-span-3">
                        <label
                          htmlFor="mobile_no"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          name="Mobile_Number"
                          id="mobile_no"
                          onChange={(e) => setMobileNo(Number(e.target.value))}
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="col-span-3">
                        <label
                          htmlFor="designation"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Designation
                        </label>
                        <input
                          type="text"
                          name="Designation"
                          id="designation"
                          onChange={(e) => setDesignation(e.target.value)}
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="col-span-3 ">
                        <label
                          htmlFor="employee-type"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Employee Type
                        </label>
                        <select
                          id="employee-type"
                          name="Employee_Type"
                          onChange={handleEmpTypeSelect}
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          {Employee?.distinctEmpTypes?.map(
                            (el: EmployeeType, i: number) => (
                              <option value={el.Employee_Type} key={i}>
                                {el.Employee_Type?.replace("_", " ")}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <div className="col-span-3 ">
                        <label
                          htmlFor="joined_date"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Joined Date
                        </label>
                        <input
                          id="joined_date"
                          type="date"
                          name="Joined_Date"
                          onChange={(e) =>
                            setJoinedDate(
                              new Date(e.target.value).toISOString()
                            )
                          }
                          className="mt-2  block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></input>
                      </div>
                      <div className="col-span-3 ">
                        <label
                          htmlFor="experience"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Experience
                        </label>
                        <select
                          id="experience"
                          name="Experience"
                          onChange={(e) =>
                            setExperienceYears(Number(e.target.value))
                          }
                          className="mt-2  block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option>2 Years</option>
                        </select>
                      </div>
                      <div className="col-span-3 ">
                        <label
                          htmlFor="salary"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Salary
                        </label>
                        <input
                          id="salary"
                          name="Salary"
                          type="text"
                          onChange={(e) => setSalary(Number(e.target.value))}
                          placeholder="ex: 450,000.00"
                          className="mt-2  block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></input>
                      </div>
                      <div className="col-span-6 ">
                        <label
                          htmlFor="personal-notes"
                          className="block text-sm font-semibold leading-6 text-defaultBlue"
                        >
                          Personal Notes
                        </label>
                        <textarea
                          id="personal-notes"
                          name="Personal_Notes"
                          rows={4}
                          onChange={(e) => setPersonalNotes(e.target.value)}
                          placeholder="Lorem ipsum dolor sit amet consectetur. Aenean feugiat enim mi ornare nibh nisl morbi sed. Lectus a pharetra"
                          className="mt-2  block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-gray-50 flex-row space-x-[32px] justify-end items-center flex px-4 py-3 text-right sm:px-6">
                    <button className="text-formBody font-medium text-[#0052EA]">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-[#0052EA] py-[10px] px-[16px] text-formBody text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Add People
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeModal;
