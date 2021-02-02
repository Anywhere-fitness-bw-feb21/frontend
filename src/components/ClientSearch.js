import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const ClientSearch = () => {

    const [inputValue, setInputValue] = useState("")
    const [searchResult,setSearchResult] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    axiosWithAuth()
    .get(`/auth/users/classes`)
    .then(res => {
        console.log(res)
      setSearchResult( res.data.data.filter(event => {
  if(event[e.target.name].includes(inputValue)){
          return event
  }

      })
      )
    })
    .catch(err => {
        console.log(err)
    })
    }

    console.log(searchResult)
    return(
        <form>
            <input 
            type = "text"
            name = "search"
            value = {inputValue}
            onChange = {handleChange}
           />

           <button name="name" onClick = {handleSearch}>Search by class name</button>
           <button name="date" onClick = {handleSearch}>Search by date</button>
           <button name="duration" onClick = {handleSearch}>Search by duration</button>
           <button name="type" onClick = {handleSearch}>Search by class type</button>
           <button name="intensity" onClick = {handleSearch}>Search by intensity level</button>
           <button name="location" onClick = {handleSearch}>Search by class location</button>
        </form>
    )
}
export default ClientSearch;