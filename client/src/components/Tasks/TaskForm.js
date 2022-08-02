import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTaskAction, getTasksAction } from '../../actions/Task'
import FormUsed from '../ui/FormUsed'
import { useHistory } from 'react-router-dom'
const TaskForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const errM = useSelector((state) => (state.taskState.errM))
    const [userTaskData, setUserTaskData] = useState({
        taskname: "",
        dueDate: ""
    })
    const submitHandler = (e) => {
        e.preventDefault();
            dispatch(createTaskAction(userTaskData.taskname, userTaskData.dueDate))
            dispatch(getTasksAction())
            setUserTaskData({
                taskname: "",
                dueDate: ""
            })
            history.push('/')
    }  
    const changeHandler = (event) => {
        const { name, value } = event.target;   
        const newValueObj = {
            ...userTaskData,
            [name]:value
        } 
        setUserTaskData(newValueObj)
    }    
const taskFormData = {
    formTitle : "Add New Task",
    itemArray : [
        {
            type: "text",
            name: "taskname",
            label: "taskname",
            value: userTaskData.taskname,
            onChange: changeHandler,
        },
        {
            type: "date",
            name: "dueDate",
            label: "duedate",
            value: userTaskData.dueDate,
            onChange: changeHandler,
        },
    ],
    onClick: submitHandler,
    btnCaption: "Add Task",
}

  return (
    <div className='container mt-3 px-2 pt-2'>
        <FormUsed  props={taskFormData} />
        { errM ? <p className="text-danger">{errM}</p> : null }
    </div>
  )
}

export default TaskForm