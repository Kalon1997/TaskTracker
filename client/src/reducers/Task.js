import {createReducer} from '@reduxjs/toolkit'
const initialState = {
    isAuth: false,
    errM: "",
    curOpenTask : {},
    re: []
}
export const taskReducers = createReducer(initialState, {

    CreateTaskSuccess : (state,action) => {
        state.newTask=action.payload;
        state.taskList.push(action.payload);
        state.isAuth=true;
        state.errM=""
    },
    CreateTaskFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload;
    },



    GetTaskSuccess : (state,action) => {
        state.taskList=action.payload;
        state.totalPages = action.totalPages;
        state.errM=""
    },
    GetTaskFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload;
        state.taskList=[]
    },


    SetStatusSuccess : (state,action) => {
        var status=action.payload.status;
        var id = action.payload.id
        var index = (state.taskList.findIndex( k => k._id === id ))
        console.log("index", index)


        state.taskList[index].status = status

        // state.errM=""

    },
    SetStatusFailure : (state,action) => {
        // state.errM = null;
        // state.errM=action.payload;
        // state.taskList=[]
    },


    OpenTaskSuccess : (state,action) => {
        state.curOpenTask=action.payload;
        state.errM=""
    },
    OpenTaskFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload;
    },
    

    SearchSuccess : (state,action) => {
        state.taskList = [];
        state.taskList=action.payload;
        state.errM=""
    },
    SearchFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload;
    },
    

    FilterSuccess : (state,action) => {
        state.taskList = [];
        state.taskList=action.payload;
        state.errM=""
    },
    FilterFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload;
    },


    EditOpenTaskSuccess : (state,action) => {
        state.curOpenTask=action.payload;
        state.errM=""
    },
    EditOpenTaskFailure : (state,action) => {
        state.errM = null;
        state.errM=action.payload;
    },

    // SetStatus : (state,action) => {
    //     state.curOpenTask.status=action.payload;
    //     state.errM=""
    // },
    // SetdueDate : (state,action) => {
    //     state.curOpenTask.dueDate=action.payload;
    //     state.errM=""
    // },
    RemarkSetter : (state,action) => {
        state.curOpenTask=action.payload;
        state.errM=""
    },


    REMARKS : (state,action) => {
        state.re=action.payload;
        state.errM=""
    },
    
})    