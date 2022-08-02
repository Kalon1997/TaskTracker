import React from 'react'
import './FormUsed.css'
const FormUsed = ({props}) => {

    if(props) {
        const {formTitle, itemArray, onClick, btnCaption} = props

        return (
    <div className='container mt-3 px-2 pt-2'>   
        
{  <form>
           <center ><h3>{formTitle}</h3></center>
            {
                itemArray && itemArray?.map((i, index) => {
                    return (
                    <div className="form-group" key={index}>
                    <b>{i.label}</b>
                    <input 
                        type={i.type} 
                        className="form-control"
                        style={{
                            width: "100%",
                            height: "2rem",
                            margin: "2rem 0 2rem 0",
                            padding: "2rem",
                            fontSize: "20px"
                        }}
                        id={i.name}
                        name={i.name}
                        value={i.value}
                        onChange={i.onChange} 
                        placeholder={i.name}
                    /> 
                    </div>
                    )
                })
            }
            
              <button 
                type="button" 
                className="btn btn-success"
                style={{
                    width: "100%",
                    fontSize: "15px"
                }}
                onClick={onClick}>
                    <b>{btnCaption}</b>
                </button>
            
</form>}
    </div>        

            
                )

    }

    else
    return null  
}
export default FormUsed;