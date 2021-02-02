import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const ClientSearch = () => {

    const [inputValue, setInputValue] = useState("")
    
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .get(`/api/auth/users/classes/${e.target.name}`)
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

           <button name="time" onClick = {handleSearch}>Search by class time</button>
           <button name="date" onClick = {handleSearch}>Search by date</button>
           <button name="duration" onClick = {handleSearch}>Search by duration</button>
           <button name="type" onClick = {handleSearch}>Search by class type</button>
           <button name="intensity" onClick = {handleSearch}>Search by intensity level</button>
           <button name="location" onClick = {handleSearch}>Search by class location</button>
        </form>
    )
}
export default ClientSearch;