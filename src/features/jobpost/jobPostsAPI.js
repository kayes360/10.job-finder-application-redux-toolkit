import axiosInstance from "../../utils/axiosInstance";
 
export const addJobPost = async (jobPostData) => { 
  const res = await axiosInstance.post("jobposts", jobPostData);
  return res.data;
};
export const modifyJobPostById = async (id, jobPostData) => {  
  const res = await axiosInstance.put(`jobposts/${id}`, jobPostData)
  return res.data;
};

export const fetchJobPosts = async () => {
  const res = await axiosInstance.get("jobposts"); 
  return res.data;
};

export const fetchJobPostById = async (id) => { 
  const res = await axiosInstance.get(`jobposts/${id}`);
  return res.data;
};
 
 
 

export const removeJobPost= async (id) => { 
  const res = await axiosInstance.delete(`jobposts/${id}`); 
  return res.data;
};
