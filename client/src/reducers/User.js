import {createReducer} from '@reduxjs/toolkit'
const initialState = {
    isAuth: false,
    errM: "",
}
export const userReducer = createReducer(initialState, {

    RegisterSuccess : (state,action) => {
        state.curUser=action.payload;
        state.isAuth=true;
        state.errM=""
    },
    RegisterFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload;
    },



    LoginSuccess : (state,action) => {
        state.curUser=action.payload; 
        state.isAuth=true;
        state.errM="";
    },
    LoginFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload; 
    },


    LoadUserSuccess : (state,action) => {
        state.curUser=action.payload; 
        state.isAuth=true;
        state.errM = null;
    },
    LoadUserFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload; 
        state.isAuth=false; 
    },



    LogoutSuccess : (state) => {
        state.isAuth=false; 
    },
    LogoutFailure : (state, action) => {
        state.isAuth=true; 
        state.errM = null;
        state.errM=action.payload;
    },


    OpenProfileSuccess : (state,action) => {
        state.curOpenProfile=action.payload;
        state.errM=""
    },
    OpenProfileFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload;
    },



})