import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <a
              href="/jobs"
              className="main-menu menu-active"
              id="alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </a>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <a
                  className="sub-menu"
                  href="/jobs/internship"
                  id="internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </a>
              </li>
              <li>
                <a
                  className="sub-menu"
                  href="/jobs/fulltime"
                  id="fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </a>
              </li>
              <li>
                <a
                  className="sub-menu"
                  href="/jobs/remote"
                  id="remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addnewjob" className="main-menu" id="addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
 