import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const ClientSearch = () => {

    const [inputValue, setInputValue] = useState("")
    
    const handleChange = (e) => {

    }

    const handleSearch = (endpoint) => {
    axiosWithAuth()
    .get(`/api/auth/users/classes/${endpoint}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    }

    return(
        <form>
            <input 
            type = "text"
            name = "search"
            value = {inputValue}
            onChange = {handleChange}
           />

           <button onClick = {handleSearch()}>Search by class time</button>
           <button onClick = {handleSearch()}>Search by date</button>
           <button onClick = {handleSearch("duration")}>Search by duration</button>
           <button onClick = {handleSearch("type")}>Search by class type</button>
           <button onClick = {handleSearch("intensity")}>Search by intensity level</button>
           <button onClick = {handleSearch("location")}>Search by class location</button>
        </form>
    )
}
export default ClientSearch;