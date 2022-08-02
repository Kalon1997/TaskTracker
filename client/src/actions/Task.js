import axios from "axios";


export const createTaskAction = (taskname, dueDate) => async (dispatch) => {
  try {
        axios.defaults.withCredentials = true
        const { data } = await axios.post(
            "http://localhost:5000/api/v1/createTask",
            { taskname, dueDate },
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          dispatch({
            type:"CreateTaskSuccess",
            payload: data.newTask
          })
    } catch (error) {
      dispatch({
        type: "CreateTaskFailure",
        payload: error.response.data.message
      })
    }
}


export const getTasksAction = (pageNum) => async (dispatch) => {
    try {
          axios.defaults.withCredentials = true
          const { data } = await axios.get(
              `http://localhost:5000/api/v1/allTasks?page=${pageNum}`,
              {
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            dispatch({
              type:"GetTaskSuccess",
              payload: data.allTasks,
              totalPages: data.totalPages,
            })
      } catch (error) {
        dispatch({
          type: "GetTaskFailure",
          payload: error.response.data.message
        })
      }
  }
  
  export const setStatusAction = (status, id) => async (dispatch) => {
    try {
      axios.defaults.withCredentials = true
          await axios.put(
              "http://localhost:5000/api/v1/changeStatus",
              {status, id},
              {
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            dispatch({
              type:"SetStatusSuccess",
              payload: {status, id}
            })
      } catch (error) {
        dispatch({
          type: "SetStatusFailure",
          payload: ""
        })
      }
  }


  export const openTaskAction = (id) => async (dispatch) => {
    try {
      axios.defaults.withCredentials = true
          const { data } = await axios.get(
              `http://localhost:5000/api/v1/openTask/${id}`,
              {
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            dispatch({
              type:"OpenTaskSuccess",
              payload: data.openedTask
            })
      } catch (error) {
        dispatch({
          type: "OpenTaskFailure",
          payload: error.response.data.message
        })
      }
  }

  export const editOpenTaskAction = (id, status, dueDate) => async (dispatch) => {
    try {
      //onclick of "sav changes" btn
      axios.defaults.withCredentials = true
          const { data } = await axios.put(
              `http://localhost:5000/api/v1/editTask/`,
              {id, status, dueDate},
              {
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            dispatch({
              type:"EditOpenTaskSuccess",
              payload: data.editedTask
            })
      } catch (error) {
        dispatch({
          type: "EditOpenTaskFailure",
          payload: error.response.data.message
        })
      }
  }
  
  export const searchAction = (keywords) => async (dispatch) => {
    try {
      axios.defaults.withCredentials = true
          const { data } = await axios.post(
              `http://localhost:5000/api/v1/searchTask`,
              {keywords},
              {
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            dispatch({
              type:"SearchSuccess",
              payload: data.searchResArray
            })
      } catch (error) {
        dispatch({
          type: "SearchFailure",
          payload: error.response.data.message
        })
      }
  }
  export const statusFilterAction = (s) => async (dispatch) => {
    try {
      axios.defaults.withCredentials = true
          const { data } = await axios.post(
              `http://localhost:5000/api/v1/filter`,
              {s},
              {
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            dispatch({
              type:"FilterSuccess",
              payload: data.resFilter
            })
      } catch (error) {
        dispatch({
          type: "FilterFailure",
          payload: error.response.data.message
        })
      }
  }
  

  
  export const changeReduxStatusAction = (status) => (dispatch) => {
      //onclick of "sav changes" btn
            dispatch({
              type:"SetStatus",
              payload: status
            })
  }
  export const changeReduxdueDateAction = (dueDate) => (dispatch) => {
    //onclick of "sav changes" btn
          dispatch({
            type:"SetdueDate",
            payload: dueDate
          })
}


export const postRemarkAction = (id, remark) => async (dispatch) => {
  try {

    axios.defaults.withCredentials = true
        const { data } = await axios.put(
            `http://localhost:5000/api/v1/addRemark/`,
            {id, remark},
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          
          dispatch({
            type:"RemarkSetter",
            payload: data.remarkAddedTask
          })
    } catch (error) {
      // dispatch({
      //   type: "FilterFailure",
      //   payload: error.response.data.message
      // })
    }
}



export const getRemarksAction = (id) => async (dispatch) => {
  try {

    axios.defaults.withCredentials = true
        const { data } = await axios.post(
            `http://localhost:5000/api/v1/getRemarks/`,
            {id},
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          
          dispatch({
            type:"REMARKS",
            payload: data.rks
          })
          console.log(data.rks)
    } catch (error) {
      // dispatch({
      //   type: "FilterFailure",
      //   payload: error.response.data.message
      // })
    }
}
