import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {AxiosInstance } from "../Helper/Helper";
import { AxiosInstance } from '../Helper/Helper'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialState= {
  redirect: null,

};

export const login = createAsyncThunk("/login", async(formData) => {
    let res = await AxiosInstance.post(`/auth/login`, formData);
    let resData = res?.data;
    return resData;
  }
);

export const signup = createAsyncThunk("signup", async(formData) => {
    let res = await AxiosInstance.post(`/register/`, formData);
    let resData = res?.data;
    return resData;
  }
);


export const AuthSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
   
    reset_redirectToUpdate: (state, { payload }) => {
      state.redirect = payload;
      },
      logout :(state) => {
        localStorage.removeItem("token");
      }
  },

  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(login.fulfilled, (state, action, payload ) => {
        if(payload.status===200){
          state.status = "idle";
          state.redirect="/";
          localStorage.setItem("token",payload?.token)
          
          toast(payload?.message)
        }
  
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "idle";
        toast.success("Invalid Credentials");
      })


//////////////////////////////////////      signup   //////////////////////////////////      
      .addCase(signup.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        console.log("hi",payload);

        if(payload.success===true){
          state.status = "idle";
           state.redirect="/login"
          localStorage.setItem("name",payload?.data.name)
          toast(payload?.message)
        } 
      
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "idle";
          toast.success("This email already exist");
      });
  },
});


export const {reset_redirectToUpdate,logout} = AuthSlice.actions;
export default AuthSlice;