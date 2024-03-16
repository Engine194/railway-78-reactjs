import { createSlice } from '@reduxjs/toolkit'

const initialState  = {
    data: [],
  }

  export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      fetchUserList: (state, actions) => {
        const userList = actions.payload
        state.data = userList
      },
      updateUser: {state, actions} => {
        const updatedUser = actions.payload
        const findUserIndex = state.data.findIndex(({id}) => id === updatedUser?.id)
        if(findUserIndex >= 0){
        state.data[findUserIndex] = updatedUser
        }
      }
    },
  })

  const userReducer = userSlice.reducer
  
  // Action creators are generated for each case reducer function
  export const { fetchUserList} = userSlice.actions
  
  export default userReducer