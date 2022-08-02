import axios from "axios";


export const registerAction = (username, email, password) => async (dispatch) => {
  try {
        axios.defaults.withCredentials = true
        const { data } = await axios.post(
            "http://localhost:5000/api/v1/register",
            { username, email, password },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"RegisterSuccess",
            payload: data.user
          })
          // history.push('/')
          // window.location.assign('/login')
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message
      })
    }
}



export const loginAction = (email, password) => async (dispatch) => { 
  try {
    console.log("action",email, password)
      axios.defaults.withCredentials = true
      const { data } = await axios.post(
          "http://localhost:5000/api/v1/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        dispatch({
          type:"LoginSuccess",
          payload: data.user,
        })

  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message
    })
  }
}
export const loadUserAction = () => async (dispatch) => {
    try {
        axios.defaults.withCredentials = true
        const { data } = await axios.get(
            "http://localhost:5000/api/v1/myProfile",
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"LoadUserSuccess",
            payload: data.user
          })
    } catch (error) {
      dispatch({
        type: "LoadUserFailure",
        payload: error.response.data.message
      })
    }
  }
  
  export const logoutAction = () => async (dispatch) => {
    try {
        axios.defaults.withCredentials = true
        await axios.get(
            "http://localhost:5000/api/v1/logout",
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"LogoutSuccess",
          })
    } catch (error) {
      dispatch({
        type: "LogoutFailure",
        payload: error.response.data.message
      })
    }
  }


  export const openProfileAction = (id) => async (dispatch) => {
    try {
      axios.defaults.withCredentials = true
          const { data } = await axios.get(
              `http://localhost:5000/api/v1/openProfile/${id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            dispatch({
              type:"OpenProfileSuccess",
              payload: data.openProfile
            })
      } catch (error) {
        dispatch({
          type: "OpenProfileFailure",
          payload: error.response.data.message
        })
      }
  }


  