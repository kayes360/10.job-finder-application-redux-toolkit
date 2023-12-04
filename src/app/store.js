import { configureStore } from "@reduxjs/toolkit";
import jobPostsSlice from "../features/jobpost/jobPostsSlice";

 const store = configureStore({
    reducer: {
        jobPosts : jobPostsSlice
    }
})

export default store