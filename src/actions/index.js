import axiosWithAuth from "../utils/axiosWithAuth"

export const addClass = (sesh)=> dispatch => {
    dispatch({ type: "API_START"})
    axiosWithAuth().post("https://anytime-fitness.herokuapp.com/api/auth/instructor/classes", sesh)
        .then(res=>{
            // dispatch({type: "API_GOOD"})
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
        dispatch({ type: "SET_CLASSES", payload: res.data.data})
    })
    .catch(drama=>{
        dispatch({ type: "API_BAD"})
    })
}

export const editClass = (data) => dispatch =>{
    dispatch({ type: "API_START"})
    axiosWithAuth().put(`https://anytime-fitness.herokuapp.com/api/auth/instructor/classes/${data.id}`, data)
    .then(res=>{
        dispatch({ type: "API_GOOD"})
        dispatch({ type: "CANCEL_EDIT"})
    })
    .catch(drama=>{
        console.log(drama)
    })
}

export const setEditing = (data) =>dispatch =>{
    dispatch({type: "SET_EDITTING", payload: data})
}
export const cancelEdit = () =>dispatch=>{
    dispatch({type: "CANCEL_EDIT"})
}

export const searchClass  = (input,inputValue) => dispatch => {
    dispatch({ type: "API_START"})

    axiosWithAuth()
    .get(`/auth/users/classes`)
    .then(res => {
     
        dispatch({type: "SEARCH", 
        payload: res.data.data.filter(inclass => {
            return inclass[input].includes(inputValue)
        })}) 
        
    })
    .catch(err => {
        dispatch({ type: "API_BAD"})
    })
}
// export const joinClass = (data) => dispatch =>{
//     dispatch({ type: "API_START"})
//     axiosWithAuth().put(`auth/users/classes/${data.id}`, data)
//     .then(res=>{
//         console.log(res)
//         // dispatch({ type: "API_GOOD"})
//         // dispatch({ type: "CANCEL_EDIT"})
//     })
//     .catch(drama=>{
//         console.log(drama.response)
//     })
// }