import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
  };
 
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      fetchUserList: (state, action) => {
        const UserList = action.payload;
        state.data = UserList;
      },
    },
  });


  const userReducer = userSlice.reducer;
  
export const {fetchUserList } = userSlice.actions

export default userReducer;


  
  