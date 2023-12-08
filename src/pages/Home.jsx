import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SingleJob from "../components/SingleJob";
import { useDispatch, useSelector } from "react-redux";
import { readJobpost } from "../features/jobpost/jobPostsSlice";
import SingleJobSkeleton from "../components/SingleJobSkeleton";
import Alert from "../components/Alert";

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading, isError, error, jobPosts } = useSelector(
    (state) => state.jobPosts
  );
  const [jobPostData, setJobPostData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [filterKey, setFilterKey] = useState("");
  const handleSearch = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    dispatch(readJobpost());
  }, [dispatch]);

  const handleSort = (e) => {
    setSortKey(e.target.value);
  };

  useEffect(() => {
    if (jobPosts.length > 0) {
      setJobPostData([...jobPosts]);

      if (sortKey === "default") {
        setJobPostData([...jobPosts]);
      }
      if (sortKey === "asc") {
        let sortedJobPosts = [...jobPosts].sort((a, b) => a.salary - b.salary);
        setJobPostData(sortedJobPosts);
      }

      if (sortKey === "desc") {
        let sortedJobPosts = [...jobPosts].sort((a, b) => b.salary - a.salary);
        setJobPostData(sortedJobPosts);
      }
    }
  }, [jobPosts, sortKey]);

  //decide what to render
  let content;
  if (isLoading) {
    content = Array.from({ length: 5 }).map((_, index) => (
      <SingleJobSkeleton key={index} />
    ));
  }

  if (!isLoading && isError) {
    content = <Alert message={error} />;
  }

  if (!isLoading && !isError && jobPostData.length === 0) {
    content = <Alert message="No Job Post found" />;
  }

  if (!isLoading && !isError && jobPostData.length > 0) {
    content = jobPostData
      .filter((jobPost) => {
        return filterKey.toLowerCase() === ""
          ? jobPost
          : jobPost.type.toLowerCase().includes(filterKey.toLowerCase());
      })
      .filter((jobPost) => {
        return searchKey.toLowerCase() === ""
          ? jobPost
          : jobPost.title.toLowerCase().includes(searchKey.toLowerCase());
      })
      .map((jobPost) => <SingleJob key={jobPost.id} jobPost={jobPost} />);
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 mt-\[5\.8125rem\] ">
        <Sidebar filterKey={filterKey} setFilterKey={setFilterKey} />

        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
              <h1 className="section-title">All Available Jobs</h1>
              <div>
                <div className="flex gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                    </div>
                    <input
                      type="text"
                      id="email-address-icon"
                      className=" border   text-sm 
                      rounded-lg 
                      bg-gray-700 
                      border-gray-700 
                      text-gray-900 
                      focus:ring-blue-500 
                      focus:border-blue-500 block w-full ps-10 p-2.5   
                      placeholder-gray-400    "
                      placeholder="Search"
                      onChange={handleSearch}
                    />
                  </div>

                  <select
                    id="sort"
                    name="sort"
                    autoComplete="sort"
                    className="w-48 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleSort}
                  >
                    <option value="default">Default</option>
                    <option value="asc">Salary (Low to High)</option>
                    <option value="desc">Salary (High to Low)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="jobs-list">{content}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
