import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJobPost, fetchJobPosts, removeJobPost } from "./jobPostsAPI"

//initial state
const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    jobPosts: [],
    editedJobPost: {}
}

// CREATE thunk
export const createJobpost = createAsyncThunk(
    'jobposts/createJobPost',
    async (jobData) =>{
        console.log("CREATE slice", jobData)
        const jobPost =  await addJobPost(jobData)
        return jobPost
    }
)

// READ thunk
export const readJobpost = createAsyncThunk(
    'jobposts/readJobPost',
    async () =>{
        const jobPosts =  await fetchJobPosts() 
        return jobPosts
    }
)

// DELETE thunk
export const deleteJobpost = createAsyncThunk(
    'jobposts/deleteJobpost',
    async (id) =>{
        console.log("delete slice", id) 
        const jobPost =  await removeJobPost(id) 
        return jobPost
    }
)



// Slices 
export const jobPostsSlice = createSlice({
    name: "jobPosts",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        //jobpost CREATE slice
        .addCase(createJobpost.pending, (state) => { 
            state.isError = false,
            state.isLoading = true 
        })
        .addCase(createJobpost.fulfilled, (state, action) => { 
            console.log("action.payload", action.payload)
            state.isError = false,
            state.isLoading = false,
            state.jobPosts.push(action.payload) 
        })
        .addCase(createJobpost.rejected, (state, action) => { 
            state.isLoading = false,
            state.isError = true,
            state.error = action.error?.message,
            state.jobPosts = []
        })

        //jobpost READ slice
        .addCase(readJobpost.pending, (state) => { 
            state.isError = false,
            state.isLoading = true 
        })
        .addCase(readJobpost.fulfilled, (state, action) => { 
            state.isError = false,
            state.isLoading = false,
            state.jobPosts = action.payload 
        })
        .addCase(readJobpost.rejected, (state, action) => { 
            state.isLoading = false,
            state.isError = true,
            state.error = action.error?.message,
            state.jobPosts = []
        })

        //jobpost DELETE slice
        .addCase(deleteJobpost.pending, (state) => { 
            state.isError = false,
            state.isLoading = true 
        })
        .addCase(deleteJobpost.fulfilled, (state, action) => { 
            console.log("action",action.meta.arg)
            state.isError = false,
            state.isLoading = false,
            state.jobPosts = state.jobPosts.filter((item)=> item.id !==action.meta.arg) 
        })
        .addCase(deleteJobpost.rejected, (state, action) => { 
            state.isLoading = false,
            state.isError = true,
            state.error = action.error?.message,
            state.jobPosts = []
        })
         
    }
})

export default jobPostsSlice.reducer