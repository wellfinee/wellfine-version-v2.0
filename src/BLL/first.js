import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const firstPost = createAsyncThunk(
    'first/firstPost',
    async () => {
      const response = await axios.get('https://wellfine-webhosting-posts-lilp.onrender.com/posts/top')
      return response.data
    }
  )

const initialState = {
    posts: [],
    load: false, 
    open: false
}

const counterSlice = createSlice({
  name: 'first',
  initialState,
  reducers: {
    set: (state) => {
      state.open = !state.open
  }
  },
  extraReducers: builder => {
    builder.addCase(firstPost.fulfilled, (state, action) => {
        state.posts = action.payload
        state.load = true
    })
  }
})
const { actions, reducer } = counterSlice
export const { set } = actions;
export const firstReducer = counterSlice.reducer