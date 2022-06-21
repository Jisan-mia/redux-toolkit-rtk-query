import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return [...res.data];
  } catch(e) {
    return e.message
  }
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload
      })
  }
})

export const {} = usersSlice.actions;

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer