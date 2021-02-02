import axiosWithAuth from "../utils/axiosWithAuth"

export const addClass = (sesh)=> dispatch => {
    dispatch({ type: "API_START"})
    axiosWithAuth().post("https://anytime-fitness.herokuapp.com/api/auth/instructor/classes", sesh)
        .then(res=>{
            console.log(res)
            dispatch({type: "API_GOOD"})
        })
        .catch(res=>{
            console.log(res)
            dispatch({ type: "API_BAD", payload: res.error})
        })
}

export const getClasses = () =>dispatch =>{
    dispatch({ type:"API_START"})
    axiosWithAuth().get("https://anytime-fitness.herokuapp.com/api/auth/users/classes")
    .then(res=>{
        dispatch({ type: "API_GOOD"})
        console.log(res.data)
        dispatch({ type: "SET_CLASSES", payload: res.data.data})
    })
    .catch(drama=>{
        dispatch({ type: "API_BAD"})
    })
}