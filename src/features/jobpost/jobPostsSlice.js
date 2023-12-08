import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJobPost,  fetchJobPostById,  fetchJobPosts, modifyJobPostById, removeJobPost } from "./jobPostsAPI"

//initial state
const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    jobPosts: [], 
    editedJobPost: [],
    singleJobPost: []
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

// READ thunk
export const readJobpostById = createAsyncThunk(
    'jobpost/readJobpostById',
    async (id) =>{ 
        const jobPost =  await fetchJobPostById(id) 
        return jobPost
    }
)
// UPDATE thunk
export const updateJobpostById = createAsyncThunk(
    'jobpost/updateJobpostById',
    async ({id, editFormData}) =>{ 
         

        const updatedJobPost =  await modifyJobPostById(id, editFormData) 
        return updatedJobPost
    }
)
 

// DELETE thunk
export const deleteJobpost = createAsyncThunk(
    'jobposts/deleteJobpost',
    async (id) =>{ 
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
        

        //jobpost READ By ID slice
        .addCase(readJobpostById.pending, (state) => { 
            state.isError = false,
            state.isLoading = true 
        })
        .addCase(readJobpostById.fulfilled, (state, action) => { 
            state.isError = false,
            state.isLoading = false,
            state.singleJobPost = action.payload
        })
        .addCase(readJobpostById.rejected, (state, action) => { 
            state.isLoading = false,
            state.isError = true,
            state.error = action.error?.message,
            state.singleJobPost = []
        })

        //jobpost UPDATE slice
        .addCase(updateJobpostById.pending, (state) => { 
            state.isError = false,
            state.isLoading = true 
        })
        .addCase(updateJobpostById.fulfilled, (state, action) => { 
            state.isError = false;
            state.isLoading = false;
            const indexToUpdate = state.jobPosts.findIndex((item)=> item.id === action.payload.id) 
            state.jobPosts[indexToUpdate] = action.payload 
        })
        .addCase(updateJobpostById.rejected, (state, action) => { 
            state.isLoading = false,
            state.isError = true,
            state.error = action.error?.message;
        })

         

        //jobpost DELETE slice
        .addCase(deleteJobpost.pending, (state) => { 
            state.isError = false,
            state.isLoading = true 
        })
        .addCase(deleteJobpost.fulfilled, (state, action) => { 
            
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