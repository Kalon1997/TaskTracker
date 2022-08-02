import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './reducers/User'
import { taskReducers } from './reducers/Task'

const store = configureStore({
    reducer: {
        userState : userReducer,
        taskState: taskReducers
    }
})
export default store;