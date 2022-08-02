import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../actions/User'
const Navbar = () => {
  const dispatch = useDispatch()
    var user = useSelector((state) => {
        if(!state.userState.curUser)
            return ""
        else
            return state.userState.curUser
    })


  return (
    <div>
<nav className="navbar navbar-expand-lg  navbar-light bg-light">
  <a class="navbar-brand  " style={{
      fontSize: "3rem",
      transform: "rotate(-20deg)",
      textDecoration: 'underline',
      fontFamily: `'Mouse Memoirs', sans-serif`,
      color: 'blue'
  }}href="/">Task Tracker</a>
  
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class=" collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <div className='mx-5'
            style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "0.5rem"}}>
            
            <a  class="nav-link" href={`/openProfile/${user._id}`}> Welcome {user.username} </a>
            </div>
      </li>
    </ul>
      <button onClick={(e) => {
        dispatch(logoutAction())
      }} class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
  </div>


</nav>
    </div>
  )
}

export default Navbar