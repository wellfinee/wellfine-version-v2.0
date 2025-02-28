import { createAction, createReducer, createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

export const addSend = createAsyncThunk(
  'users/fetchByIdStatus',
  async (action) => {
    try{
    const response = await axios.post('https://wellfine-webhosting-posts-lilp.onrender.com/auth/login', action)
    return response.data
    } catch(err){
        return  err.response.data
    }
  }
)
const initialState = {
    auth: false,
    code: 100
}
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
      builder.addCase(addSend.fulfilled, (state, action) => {
        state.code = (action.payload.code ? action.payload.code : 100)
        state.auth = true
      })
    }
  })

  export const authRes = authSlice.reducer;
 /*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoid2VsbGZpbmUucmVib290LnRlY2hub2xvZ3kub3JnIn0.MIXOwkMmw7saqCikG8vkkuWRTwepe8CYY6aa0He-bhg*/