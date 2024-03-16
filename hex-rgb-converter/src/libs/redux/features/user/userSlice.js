import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}
export const useSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        fetchUserList: (state, action) => {
            const userList = action.payload;
            state.data = userList;
        },
    }, 
})

const userReducer = useSlice.reducer;

export const { fetchUserList } = useSlice.actions

export default userReducer;