import axiosInstance from "../../utils/axiosInstance";
 
export const addJobPost = async (jobData) => {
  const res = await axiosInstance.post("jobposts", jobData);
  return res.data;
};

export const fetchJobPosts = async () => {
  const res = await axiosInstance.get("jobposts",); 
  return res.data;
};
 
// export const editTransaction
// export const deleteTransaction
