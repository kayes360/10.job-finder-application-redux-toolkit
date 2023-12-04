import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJobPost, fetchJobPosts } from "./jobPostsAPI"

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
            state.isError = false,
            state.isLoading = false,
            state.jobPosts.push(action.payload) 
        })
        .addCase(createJobpost.rejected, (state, action) => { 
            state.isLoading = false,
            state.isError = true,
            state.error = action.error?.message,
            state.transactions = []
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
            state.transactions = []
        })
         
    }
})

export default jobPostsSlice.reducer