import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasksAction} from '../../actions/Task'
import TaskForm from './TaskForm'
import Card from './Card'
import SearchBar from './SearchBar'
import Filter from './Filter'
import Pagination from './Pagination'

const TasksPage = () => {

const dispatch = useDispatch()
useEffect(() => {
    dispatch(getTasksAction())
},[dispatch])
const allTasks = useSelector((state) => {
  if(!state.taskState.taskList)
    return []
  else
    return state.taskState.taskList
})
const [showForm, setShowForm] = useState(true)
const [showFilter, setShowFilter] = useState(true)
  return (
    <div>



  <center><button onClick={()=>setShowForm(!showForm)} className='btn btn-outline-primary mt-3' >Toggle Form</button></center>

   {showForm && <div  className='container mt-3 px-2 pt-2' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "2rem"}}><TaskForm /></div>}





   <center><button onClick={()=>setShowFilter(!showFilter)} className='btn btn-outline-primary mt-3' >Toggle Filter/Search</button></center>

{showFilter && <div className='container d-flex mt-5'  style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "2rem"}}>
<SearchBar /> <Filter />
</div>}







    <div className='container mt-3 px-2 pt-2' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "2rem"}} >
    <div className="col-sm-12 col-md-12 col-lg-12">
      <div className='row' >
{
  allTasks && allTasks?.map((i, index) => {
    return <div key={index} style={{padding: "1rem", margin: 0}}> 
    <Card props={i}  />
  </div>
  })
}

    </div>
    </div>
    </div>



    <center className='mx-auto'><Pagination/></center>

    </div>
  )
}

export default TasksPage