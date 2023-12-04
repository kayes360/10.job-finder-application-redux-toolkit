import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SingleJob from "../components/SingleJob";
import { useDispatch, useSelector } from "react-redux";
import { readJobpost } from "../features/jobpost/jobPostsSlice";
import SingleJobSkeleton from "../components/SingleJobSkeleton";
import Alert from "../components/Alert";

export default function Home() {
    const dispatch = useDispatch()
    const {isLoading,isError, error, jobPosts} =useSelector(state=> state.jobPosts)

    useEffect(() => {
      dispatch(readJobpost())  
      console.log(jobPosts)
    }, [dispatch])

    //decide what to render
    let content;

    if (isLoading) { 
        content = Array.from({ length:5 }).map((_, index) => ( <SingleJobSkeleton key={index}/>))
        // content =  <SingleJobSkeleton />
    }

    if (!isLoading && isError) {
        content = <Alert message={error}/>
    }

    if (!isLoading && !isError && jobPosts.length === 0) {
        content = <Alert message="No Job Post found"/>
    }

    if (!isLoading && !isError && jobPosts.length > 0) {
        content = jobPosts.map((jobPost)=> <SingleJob key={jobPost.id} jobPost={jobPost}/>)
    }
    

  return (
    <div>
      <Navbar />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 mt-\[5\.8125rem\] ">
        <Sidebar />

        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
              <h1 className="section-title">All Available Jobs</h1>
              <div className="flex gap-4">
                <div className="search-field group flex-1">
                  <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                  <input
                    type="text"
                    placeholder="Search Job"
                    className="search-input"
                    id="searchJob"
                  />
                </div>
                <select
                  id="sort"
                  name="sort"
                  autoComplete="sort"
                  className="flex-1"
                >
                  <option>Default</option>
                  <option>Salary (Low to High)</option>
                  <option>Salary (High to Low)</option>
                </select>
              </div>
            </div>

            <div className="jobs-list"> 
              {
                content
              } 
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
