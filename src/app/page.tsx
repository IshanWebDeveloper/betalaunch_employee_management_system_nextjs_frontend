'use client';
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import useSWR from 'swr'

const inter = Inter({ variable: "--inter-font", subsets: ["latin"] });

interface EmployeeType{
  Employee_Type:string
}
interface Employee{
  employeeData:Array<Object>,
  distinctEmpTypes:Array<EmployeeType>
}



export default function Home() {
  
  const [Employee, setEmployee] = useState<Employee>();
 

  useEffect(() => {
    fetch('http://localhost:5000/employees',{method:"GET",mode:'cors'})
    .then(res => res.json())
    .then(data => setEmployee(data))
  }, [])
  console.log(Employee);
  
  return (
    <>
      <div className="mt-10 sm:mt-0 w-screen h-screen ">
        <div className=" mx-auto w-fit ">
          <div className=" flex-col">
            <div className=" ">
              <div className="md:col-span-1"></div>
              <div className="mt-5 md:col-span-2 md:mt-0 w-[830px] h-[880px]">
                <form action="#" method="POST" >
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-[24px] py-1 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="md:col-span-6 flex justify-between">
                          <h3 className=" text-base font-semibold leading-6 text-black">
                            Add People
                          </h3>
                          <p>x</p>
                        </div>
                        <div className="border-y w-full md:col-span-6">

                        </div>
                        <div className="col-span-6 ">
                          <label
                            htmlFor="full-name"
                            className="block text-sm font-semibold leading-6 text-defaultBlue"
            
                          >
                            Full Name*
                          </label>
                          <input
                            type="text"
                            name="full-name"
                            id="full-name"
                            autoComplete="given-name"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="col-span-3 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-semibold leading-6 text-defaultBlue"
                          >
                            Name with Initials*
                          </label>
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
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
                            name="display-name"
                            id="display-name"
                            
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
                            name="gender"
                            id="gender"
                            
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
                            name="email"
                            id="email"
                            
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
                            name="mobile_no"
                            id="mobile_no"
                            
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
                            name="designation"
                            id="designation"
                            
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                        <div className="col-span-3 ">
                          <label
                            htmlFor="gender"
                            className="block text-sm font-semibold leading-6 text-defaultBlue"
                          >
                            Employee Type
                          </label>
                          <select
                            id="gender"
                            name="gender"
                            
                            className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          > 
                            {Employee?.distinctEmpTypes?.map((el:any, i:any)=>(
                              <option value="" key={i}>{el.Employee_Type?.replace("_"," ")}</option>
                            ))}          
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
                            name="joined_date"
                            
                            className="mt-2  block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          >
                                     
                            </input>
                            
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
                            name="experience"
                            
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
                            name="salary"
                            type='text'
                            placeholder="ex: 450,000.00"
                            className="mt-2  block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          >
                            
                                     
                            </input>
                            
                         </div>
                        <div className="col-span-6 ">
                          <label
                            htmlFor="salary"
                            className="block text-sm font-semibold leading-6 text-defaultBlue"
                          >
                            Personal Notes
                          </label>
                          <textarea
                            id="salary"                            
                            name="salary"
                            
                            rows={4}
                            draggable={false}
                            
                            placeholder="Lorem ipsum dolor sit amet consectetur. Aenean feugiat enim mi ornare nibh nisl morbi sed. Lectus a pharetra"
                            className="mt-2  block w-full rounded-md border-0 bg-white py-1.5 text-defaultBlue shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                          >
                            
                                     
                            </textarea>
                            
                         </div>
                        
                      
                     
                      </div>
                    </div>
                    <div className=" bg-gray-50 flex-row space-x-[32px] justify-end items-center flex px-4 py-3 text-right sm:px-6">
                      
                       <button className="text-formBody font-medium text-[#0052EA]">
                        Cancel
                       </button>
                        <button
                          
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
    </>
  );
}
