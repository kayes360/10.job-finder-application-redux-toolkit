import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({filterKey, setFilterKey }) {
    
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <p
              className={`${filterKey ===''? 'text-blue-400 font-bold': 'text-slate-400'} cursor-pointer border-b py-2`}
              id="alljobs-menu"
              onClick={() => setFilterKey("")}
            >
              <i className="fa-solid me-2  fa-briefcase"></i>
              <span> All Available Jobs</span>
            </p>

            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <p
              className={`${filterKey ==='internship'? 'text-blue-400 font-bold': 'text-slate-400'} cursor-pointer border-b py-2`}
                  id="internship-menu"
                  onClick={() => setFilterKey("internship")}
                >
                  <i className="fa-solid me-2  fa-stop !text-[#FF5757]"></i>
                  Internship
                </p>
              </li>
              <li>
                <p
              className={`${filterKey ==='full time'? 'text-blue-400 font-bold': 'text-slate-400'} cursor-pointer border-b py-2`}
                  id="fulltime-menu"
                  onClick={() => setFilterKey("full time")}
                >
                  <i className="fa-solid me-2  fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </p>
              </li>
              <li>
                <p
                  className={`${filterKey ==='remote'? 'text-blue-400 font-bold': 'text-slate-400'} cursor-pointer border-b py-2`}
                  id="remote-menu"
                  onClick={() => setFilterKey("remote")}
                >
                  <i className="fa-solid me-2 fa-stop !text-[#56E5C4]"></i>
                  Remote
                </p>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addnewjob" className="main-menu pt-7" id="addJob-menu">
              <i className="fa-solid me-2 fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
