import React from 'react'
import { useDispatch } from 'react-redux'
import { statusFilterAction } from '../../actions/Task'

const Filter = () => {
    const dispatch = useDispatch()

    const filterHandler = (arg) => {
        dispatch(statusFilterAction(arg))
    }
  return (

<div className="dropdown container mt-3 px-2 pt-2">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Filter Tasks
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <i className="dropdown-item"><button className='btn btn-outline-primary' onClick={(e) => filterHandler('pending')}>Pending</button></i>
    <i className="dropdown-item"><button className='btn btn-outline-primary' onClick={(e) => filterHandler('completed')}>Completed</button></i>
  </div>
</div>
  )
}

export default Filter