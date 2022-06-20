import { createSlice } from "@reduxjs/toolkit"


const initialState = [
  {
    id: 1,
    title: 'This is the demo title of post',
    content: 'This is the details content of post. lorem impsume lorem ipsum caret dollar'
  },
  {
    id: 2,
    title: 'This is the demo title of post 2',
    content: 'This is the details content of post 2. lorem impsume lorem ipsum caret dollar'
  }
]

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

  }
})

export const selectAllPost = (state) => state.posts;


export default postSlice.reducer;