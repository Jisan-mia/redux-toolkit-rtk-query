import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jack Man'
  },
  {
    id: 3,
    name: 'Andrew John'
  },
]

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
})

export const {} = usersSlice.actions;

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer