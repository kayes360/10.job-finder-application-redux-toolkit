import React from "react";
import { Link } from "react-router-dom";

export default function SingleJobSkeleton() {
  return (
    <div>
      {/* <!-- Single Job 1--> */}
      <div className="single-job animate-pulse">
        <div className="flex-1 min-w-0">
          <h2 className="title">
            <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-500 w-48 mb-4"></div>
          </h2>

          <div className="job-footers">
            <div className="type">
              <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-4"></div>
            </div>
            <div className="salary">
              <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
              <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-500 w-20 mb-4"></div>
            </div>
            <div className="deadline">
              <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-500 w-32 mb-4"></div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <div className="h-10 bg-gray-200 rounded-md dark:bg-gray-500 w-20 mb-4"></div>
          </span>

          <span className="sm:ml-3">
            <div className="h-10 bg-gray-200 rounded-md dark:bg-gray-500 w-20 mb-4"></div>
          </span>
        </div>
      </div>
      {/* <!-- Single Job 1--> */}
    </div>
  );
}
