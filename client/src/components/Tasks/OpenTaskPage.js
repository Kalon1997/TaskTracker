import React, { useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editOpenTaskAction, openTaskAction } from '../../actions/Task'
import Remarks from './Remarks'
import Print from './Print'


const OpenTaskPage = () => {

  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(openTaskAction(params.id))
  }, [])

  var curOpenTask = useSelector((state) => {
    if(!state.taskState.curOpenTask)
      return {}
    else
      return state.taskState.curOpenTask
  })

const [openedTaskStatus, setOpenedTaskStatus] = useState('Change Status')
const [openedTaskdueDate, setOpenedTaskdueDate] = useState(curOpenTask.dueDate)
const [showR, setShowR] = useState(false)

  return (
    <>
    {/* <div className='text-danger mr-2'><Print /></div> */}
  <center className='container mt-5 pt-5' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "2rem"}} >
      
      <b>Task ID : { curOpenTask.status==="pending" ? <span className='text-warning'>{curOpenTask._id}</span> : <u className='text-success'>{curOpenTask._id}</u>}</b>
      <div className='card-body d-flex flex-column'>
              <b className='mt-3 pt-3 card'>Task Name : {curOpenTask.taskname}</b>
              <b className='mt-3 pt-3 card'>Task created By : <a  class="nav-link" href={`/openProfile/${curOpenTask.createdById}`}>{curOpenTask.createdById}</a></b>
              <b className='mt-3 pt-3 card'>Task Status : {curOpenTask.status==="pending" ? <span className='bg-warning'>{curOpenTask.status}</span> : <span className='bg-success'>{curOpenTask.status}</span>}</b>
      
              <div className="dropdown">
                    <button className="btn btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      {openedTaskStatus}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <i className="dropdown-item"><button className='btn btn-outline-warning' onClick={(e) => {
                        setOpenedTaskStatus("pending")
                      }} >Pending</button></i>
                      <i className="dropdown-item"><button className='btn btn-outline-success' onClick={(e) => {
                        setOpenedTaskStatus("completed")
                      }}>Completed</button></i>
                    </div>
              </div>
    

              <b className='mt-3 pt-3 card'>Task created On : {curOpenTask.createdAt}</b>
              <b className='mt-3 pt-3 card'>Task Due Date : <input value={openedTaskdueDate} type="date" onChange={((e) => {
                setOpenedTaskdueDate(e.target.value)
              })} ></input></b>
        </div>


<button className='btn btn-primary' onClick={(e) => {
  dispatch(editOpenTaskAction(curOpenTask._id, openedTaskStatus, openedTaskdueDate))
}}>Save Changes</button>





</center>

<div className='card mt-3 pt-3 btn bg-primary' onClick={(e) => {
      // dispatch(getRemarksAction(params.id))  //have to delete it's corresponding stuff
      setShowR(true)
}}>Load Remarks</div>

{showR && <Remarks />}
</>



  )
}

export default OpenTaskPage
//some date format error 