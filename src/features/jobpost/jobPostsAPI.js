import axiosInstance from "../../utils/axiosInstance";
 
export const addJobPost = async (jobPostData) => {
  console.log('create api ',jobPostData)
  const res = await axiosInstance.post("jobposts", jobPostData);
  return res.data;
};

export const fetchJobPosts = async () => {
  const res = await axiosInstance.get("jobposts",); 
  return res.data;
};
 
// export const editJobPost

export const removeJobPost= async (id) => {
  console.log("DELETE API", id)
  const res = await axiosInstance.delete(`jobposts/${id}`,); 
  return res.data;
};
