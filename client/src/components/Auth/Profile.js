import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openProfileAction } from '../../actions/User'

const Profile = () => {

    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(openProfileAction(params.id))
      }, [dispatch, params.id])


      const curOpenProfile = useSelector((state) => {
        if(!state.userState.curOpenProfile)
          return {}
        else
          return state.userState.curOpenProfile
      })

  return (
    <center className='d-flex flex-column container d-flex mt-5 pt-5' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "2rem"}}>
<b>UserName : {curOpenProfile.username}</b>
<b>Email : {curOpenProfile.email}</b>
    </center>
  )
}

export default Profile