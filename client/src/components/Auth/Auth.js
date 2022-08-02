import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, registerAction } from '../../actions/User'
import FormUsed from '../ui/FormUsed'
import './Auth.css'
const Auth = () => {
    const dispatch = useDispatch()
    const [loginMode, setLoginMode] = useState(true)   //login form bydefault
    const errM = useSelector((state) => (state.userState.errM))
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const submitHandler = (e) => {
        e.preventDefault();
        if(loginMode === true)
        {
            dispatch(loginAction(userData.email, userData.password))
            setUserData({
                email: '',
                password: ''
            })
        }
        else
        {
            dispatch(registerAction(userData.username, userData.email, userData.password))
            setUserData({
                username: '',
                email: '',
                password: ''
            })
        }
        
    }
    const changeHandler = (event) => {
        const { name, value } = event.target;   
        const newValueObj = {
            ...userData,
            [name]:value
        } 
        setUserData(newValueObj)
    }

    const loginData = {
        formTitle: "Login Form",
        itemArray: [
            {
                type: "email",
                name: "email",
                label: "email",
                value: userData.email,
                onChange: changeHandler,
            },
            {
                type: "password",
                name: "password",
                label: "password",
                value: userData.password,
                onChange: changeHandler,
            }
        ],
        onClick: submitHandler,
        btnCaption: "Login",
    }



    const registerData = {
        formTitle: "Registration Form",
        itemArray: [
            {
                type: "email",
                name: "email",
                label: "email",
                value: userData.email,
                onChange: changeHandler,
            },
            {
                type: "username",
                name: "username",
                label: "username",
                value: userData.username,
                onChange: changeHandler,
            },
            {
                type: "password",
                name: "password",
                label: "password",
                value: userData.password,
                onChange: changeHandler,
            }
        ],
        onClick: submitHandler,
        btnCaption: "Register",
        
    }
  return (
      <div className='container'>
          <div className='header'>
        {/* <div className={`[${loginMode} ? 'loginTitle active' : 'loginTitle' ]`}>Login</div> */}

        { loginMode ? <div className='loginTitle active' onClick={(e)=>setLoginMode(true)}>Login</div> : <div className='loginTitle' onClick={(e)=>setLoginMode(true)}>Login</div> }
        { loginMode ? <div className='registerTitle ' onClick={(e)=>setLoginMode(false)}>Register</div> : <div className='registerTitle active' onClick={(e)=>setLoginMode(false)}>Register</div> }

    </div>
    <div className='container formBody'>
{

    loginMode ? <FormUsed props={loginData}></FormUsed> : <FormUsed props={registerData}></FormUsed>
}
{ errM ? <p className="text-danger">{errM}</p> : null }
    </div>
      </div>
    
  )
}

export default Auth