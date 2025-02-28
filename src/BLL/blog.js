import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const blogPost = createAsyncThunk(
    'users/fetchByIdStatus',
    async (list, storei) => {
        const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/all/' + list)
        return response.data
    }
)

const initialState = {
    posts: [],
    load: false,
    elem: 0
}

const blogSlice = createSlice({
    name: 'first',
    initialState,
    reducers: {
        set: (state) => {
            state.open = !state.open
        }
    },
    extraReducers: builder => {
        builder.addCase(blogPost.fulfilled, (state, action) => {
            let i = 0
            while(action.payload[i]){
                i++
            }
            state.elem = i
            state.posts = action.payload
            state.load = true
        })
    }
})
const { actions, reducer } = blogSlice
export const blogReducer = blogSlice.reducer