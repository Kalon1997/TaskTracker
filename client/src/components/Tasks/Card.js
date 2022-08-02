import React from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { openTaskAction, setStatusAction } from '../../actions/Task'

const Card = ({props}) => {
        const dispatch = useDispatch();
        const {_id, taskname, status, dueDate, createdAt} = props

        return (
            <div className='card' style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                <div className="card-body ">
                    <h5 className="card-title mt-1">{taskname}</h5>
{ status==="pending" ? <b className="card-text bg-warning mt-1">{status}</b> : <b className="card-text bg-success mt-1">{status}</b> }
                    <div>
                        {  status==="pending"  ? <input 
                        style={{marginTop: "1rem", fontSize: "2px", width:"2rem", height:"2rem"}}
                        name="status" 
                        onChange={(e) => {dispatch(setStatusAction("completed", _id))}} 
                        checked={false} 
                        type="checkbox">
                        </input>
                         : <input 
                         style={{marginTop: "1rem", fontSize: "2px", width:"2rem", height:"2rem"}}
                         name="status" 
                         onChange={(e) => {dispatch(setStatusAction("pending", _id))}} 
                         checked={true} 
                         type="checkbox">
                         </input>


                        }
                    { status==="pending" ? <i>Mark as Complete ? </i> : <i>Unmark to pending ? </i>}</div>
                    <h6 className='mt-1'><span className='text-success'>{createdAt}</span><b> - </b><span className='text-danger'>{dueDate}</span></h6>
                    <Link onClick={(e) => dispatch(openTaskAction(_id))} to={`/openTask/${_id}`} >Open Task</Link>
                </div>
            </div>
        )
}
export default Card
