import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readJobpostById } from "../features/jobpost/jobPostsSlice";
import Alert from "../components/Alert";
import EditForm from "../components/EditForm";

export default function EditJob() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { isLoading, isError, error, singleJobPost } = useSelector(
    (state) => state.jobPosts
  );
  const [editableJobPost, setEditableJobPost] = useState(null);
  useEffect(() => {
    dispatch(readJobpostById(id));
    setEditableJobPost(singleJobPost);
  }, [dispatch]);

  //decide what to render
  let content;
  if (isLoading) {
    content = "Loading...";
  }

  if (!isLoading && isError) {
    content = { error };
  }

  if (!isLoading && !isError && singleJobPost.length === 0) {
    content = <Alert message="Post Not Found" />;
  }

  if (!isLoading && !isError && singleJobPost.length > 0) {
    content = <EditForm singleJobPost={editableJobPost} />;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          
          <EditForm singleJobPost={singleJobPost} />

          <div className="bg-black text-white">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
