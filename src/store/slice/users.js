import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    addUser: (state, action) => {
      state.data = [action.payload, ...(state.data || [])];
    },
  },
});

export const { setUsers, addUser } = usersSlice.actions;
export default usersSlice.reducer;

