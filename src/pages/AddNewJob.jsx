import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { createJobpost } from "../features/jobpost/jobPostsSlice";

export default function AddNewJob() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadLine] = useState("");
  const [formData, setFormData] = useState(null);
  const dispatch = useDispatch();
  // title, type, salary, deadline 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title !== "" &&
      type !== "" &&
      salary !== "" &&
      deadline !== ""
    ) {
      setFormData({ title, type, salary, deadline });
      const submittedFormData = { title, type, salary, deadline };
      dispatch(createJobpost(submittedFormData));
    }
  };
  useEffect(() => {
    console.log("submited data", formData);
  }, [formData]);

  return (
    <div>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <h1 className="mb-10 text-center section-title">Add New Job</h1>

            <div className="max-w-3xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="fieldContainer">
                  <label
                    htmlFor="JobTitle"
                    className="text-sm font-medium text-slate-300"
                  >
                    Job Title
                  </label>
                  <select
                    id="JobTitle"
                    name="jobTitle"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  >
                    <option value="" hidden defaultValue>
                      Select Job
                    </option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Software Developer">
                      Software Developer
                    </option>
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                    <option value="MERN Stack Developer">
                      MERN Stack Developer
                    </option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Social Media Manager">
                      Social Media Manager
                    </option>
                    <option value="Senior Executive">Senior Executive</option>
                    <option value="Junior Executive">Junior Executive</option>
                    <option value="Android App Developer">
                      Android App Developer
                    </option>
                    <option value="IOS App Developer">IOS App Developer</option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                  </select>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="JobType">Job Type</label>
                  <select
                    id="JobType"
                    name="jobType"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option value="" hidden defaultValue>
                      Select Job Type
                    </option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="jobSalary">Salary</label>
                  <div className="flex border rounded-md shadow-sm border-slate-600">
                    <span className="input-tag">BDT</span>
                    <input
                      type="number"
                      name="jobSalary"
                      id="JobSalary"
                      required
                      className="!rounded-l-none !border-0"
                      placeholder="20,00,000"
                      onChange={(e) => {
                        setSalary(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="JobDeadline">Deadline</label>
                  <input
                    type="date"
                    name="jobDeadline"
                    id="JobDeadline"
                    required
                    onChange={(e) => {
                      setDeadLine(e.target.value);
                    }}
                  />
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    id="submit"
                    className="cursor-pointer btn btn-primary w-fit  btn bg-blue-400 hover:bg-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
