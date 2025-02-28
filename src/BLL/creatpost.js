import { createAction, createReducer, createSlice, createAsyncThunk, current} from "@reduxjs/toolkit"
import axios from 'axios'

export const addCreate = createAsyncThunk(
  'users/fetchByIdStatus',
  async (action) => {
    try{
    const response = await axios.post('https://wellfine-webhosting-posts-lilp.onrender.com/posts/create', action)
    
    return response.data
    } catch(err){
        return  err.response.data
    }
  }
)
const initialState = {
    currect: null
}
  const creatSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
      builder.addCase(addCreate.fulfilled, (state, action) => {
        switch(action.payload.code){
            case(200):
                state.currect = true
                break
            case(400):
                state.currect = false
                break
        }
      })
    }
  })

  export const createRes = creatSlice.reducer;
 