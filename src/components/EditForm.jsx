import React, { useEffect, useState } from "react";
import { updateJobpostById } from "../features/jobpost/jobPostsSlice";
import { useDispatch } from "react-redux";

export default function EditForm({ singleJobPost }) { 
  const {id, title, type, salary, deadline } = singleJobPost;
  const [editTitle, setEditTitle] = useState("");
  const [editType, setEditType] = useState("");
  const [editSalary, setEditSalary] = useState("");
  const [editDeadline, setEditDeadLine] = useState(""); 
const dispatch = useDispatch()
  useEffect(() => {
    setEditTitle(title || "");
    setEditType(type || "");
    setEditSalary(salary || "");
    setEditDeadLine(deadline || "");
  }, [title, type, salary, deadline]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      editTitle !== "" &&
      editType !== "" &&
      editSalary !== "" &&
      editDeadline !== ""
    ) {
      const editFormData = { title:editTitle, type:editType, salary:editSalary, deadline:editDeadline }; 
        dispatch(updateJobpostById({id, editFormData}));
    }
  };
 
  
  return (
    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <h1 className="mb-10 text-center section-title">
        <span className="text-blue-400">Edit Job</span> 
      </h1>

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
              name="JobTitle"
              className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              required
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            >
              <option value="" hidden defaultValue>
                Select Job
              </option>
              <option value="" hidden defaultValue>
                Select Job
              </option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="MERN Stack Developer">MERN Stack Developer</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="QA Engineer">QA Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Social Media Manager">Social Media Manager</option>
              <option value="Senior Executive">Senior Executive</option>
              <option value="Junior Executive">Junior Executive</option>
              <option value="Android App Developer">
                Android App Developer
              </option>
              <option value="IOS App Developer">IOS App Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Frontend Engineer">Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="JobType">Job Type</label>
            <select
              id="JobType"
              name="JobType"
              className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              required
              value={editType}
              onChange={(e) => {
                setEditType(e.target.value);
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
            <label htmlFor="JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                type="number"
                name="JobSalary"
                id="JobSalary"
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
                value={editSalary}
                onChange={(e) => {
                  setEditSalary(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="JobDeadline">Deadline</label>
            <input
              type="date"
              name="JobDeadline"
              id="JobDeadline"
              required
              value={editDeadline}
              onChange={(e) => {
                setEditDeadLine(e.target.value);
              }}
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              id="submit"
              className="edit cursor-pointer btn bg-blue-400 hover:bg-blue-500"
            >
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>

              Edit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
