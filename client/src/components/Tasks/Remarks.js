import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  postRemarkAction } from '../../actions/Task'
const Remarks = () => {

    const dispatch = useDispatch()


    var curOpenTask = useSelector((state) => {
        if(!state.taskState.curOpenTask)
          return {}
        else
          return state.taskState.curOpenTask
      })


 var re = useSelector((state) => {
        if(!state.taskState.re)
          return []
        else
          return state.taskState.curOpenTask.remarks
      })

    const divArr = [
        { 
            name:null,
        }
      ];
      const [cusDiv, setCusDiv] = useState(divArr)

      const addCustomFoodItems = (e) => {
        e.preventDefault();
        var newObj = { name:null}
        setCusDiv([...cusDiv,newObj])
    }

const cusChangeHandler = (index, event) => {
    event.preventDefault();
    var tempData = [...cusDiv];
    tempData[index][event.target.name] = event.target.value;
    setCusDiv(tempData);
}


const removeCusDiv = (index, event) => {
    event.preventDefault();
    var tempData = [...cusDiv];
    tempData.splice(index,1)
    setCusDiv(tempData);
}

  return (
<div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "2rem"}} className='container mt-4 pt-4'>

                    {
                     re  && re?.map((r, index) => {
                            return <div className='card mt-5 pt-2' key={index}>
                                <div className=' mt-1 pt-1 w-100 d-flex flex-row'>
                               <b><u>Posted By : </u></b><a  class="nav-link" href={`/openProfile/${r.remarkGiverId}`}> {r.remarkGiverId} </a>   
                                </div>
                                <div className='mt-1 pt-1 w-100'><b>Remark :   </b> {r.remark}</div>
                            </div>
                        })
                    }


<button 
                className='btn mt-5 btn-primary'
                onClick={(e)=>addCustomFoodItems(e)}>
                    Add remarks ?
</button>

{
            cusDiv.map((i, index) => {
                return (
                    <div className='mt-5 pt-5 bg-light' key={index}>
                        <input //name
                            type="text"
                            name="name"
                            placeholder='remarks'
                            className='w-100 pt-5 px-5'
                            value={i.name}
                            onChange={(event) => cusChangeHandler(index,event)}
                        >
                        </input>
                        
                        <button onClick={(event)=>removeCusDiv(index, event)} className='btn btn-outline-danger'>Remove it </button>
                        <button onClick={(event)=>{
                            dispatch(postRemarkAction(curOpenTask._id, cusDiv[0].name))
                            setCusDiv([])
                            }} className='btn btn-primary'>Post it </button>
                    
                    
                    
                    </div>
                )
            })
}




                   
</div>
  )
}

export default Remarks