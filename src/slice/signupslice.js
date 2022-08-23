import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
    // userError: "",
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.signup = true;
      state.firstName = action.payload.currentUser.firstName;
      state.lastName = action.payload.currentUser.lastName;
      state.email =  action.payload.currentUser.email;
      state.phoneNumber = action.payload.currentUser.phoneNumber
    },
    updateCurrentUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },

    userLoggedIn: (state, action) => {
      state.signup = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },

    userLogout: (state) => {
      state.signup = false;
      state.id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
    },

    signupError: (state, action) => {
      state.userError = action.payload.userError;
    },
  },
});

export const {
  setCurrentUser,
  userLogout,
  userLoggedIn,
  signupError,
  updateCurrentUser,
} = signupSlice.actions;

export default signupSlice.reducer;
