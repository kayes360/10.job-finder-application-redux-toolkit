import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SingleJob({ jobPost }) {
  const { title, type, salary, deadline } = jobPost;
  const [typeColor, setTypeColor] = useState("");
  const checkType = (type) => {
    switch (type) {
      case "Internship":
        setTypeColor("FF5757");
        break;
      case "Full Time":
        setTypeColor("FF8A00");
        break;

      case "Remote":
        setTypeColor("56E5C4");
        break;

      default:
        setTypeColor("");
        break;
    }
  };

  useEffect(() => {
    checkType(type)
  }, []);

  return (
    <div>
      {/* <!-- Single Job 1--> */}
      <div className="single-job">
        <div className="flex-1 min-w-0">
          <h2 className="title">{title}</h2>
          <div className="job-footers">
            <div className="type">
              <i
                className={`fa-solid fa-stop !text-[#${typeColor}] text-lg mr-1.5`}
              ></i>
              {type}
            </div>
            <div className="salary">
              <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
              BDT {salary}
            </div>
            <div className="deadline">
              <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
              Closing on {deadline}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <Link to="/editjob" type="button" className="edit btn btn-primary">
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </Link>
          </span>

          <span className="sm:ml-3">
            <button type="button" className="delete btn btn-danger ">
              <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
              Delete
            </button>
          </span>
        </div>
      </div>
      {/* <!-- Single Job 1--> */}
    </div>
  );
}