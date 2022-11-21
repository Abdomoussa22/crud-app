import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    editUser : (state , action)=>{
      const {id , name , email} = action.payload
      const existingUser = state.find(user=>user.id === id)
      if (existingUser){
        existingUser.name = name
        existingUser.email = email
      }
    },
    deleteUser :(state , action)=>{
        const {id} = action.payload
        const existingUser = state.find(user=>user.id === id)
        if (existingUser){
          return state.filter(user=>user.id !== id)  }
    }
  }
});

// // Action creators are generated for each case reducer function
export const { addUser , editUser , deleteUser} = UsersSlice.actions;

export default UsersSlice.reducer;
