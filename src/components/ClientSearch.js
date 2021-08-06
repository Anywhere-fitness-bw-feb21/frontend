import React,{useState} from 'react'
import {searchClass} from '../actions/index';
import {connect} from 'react-redux';

const ClientSearch = (props) => {

    const [inputValue, setInputValue] = useState("")
   
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
    props.searchClass(e.target.name, inputValue)
  
    }

    
    return(
        <>
        <form>
            <div>
            <input 
            type = "search"
            name = "search"
            value = {inputValue}
            onChange = {handleChange}
           />
           </div>
          <div className = "button-group">
           <button name="name" onClick = {handleSearch}>Search&nbsp;by&nbsp;class&nbsp;name</button>
           <button name="date" onClick = {handleSearch}>Search&nbsp;by&nbsp;date</button>
           <button name="duration" onClick = {handleSearch}>Search&nbsp;by&nbsp;duration</button>
           <button name="type" onClick = {handleSearch}>Search&nbsp;by&nbsp;class&nbsp;type</button>
           <button name="intensity" onClick = {handleSearch}>Search&nbsp;by&nbsp;intensity&nbsp;level</button>
           <button name="location" onClick = {handleSearch}>Search&nbsp;by&nbsp;class&nbsp;location</button>
         </div>
        </form>
        </>
    )
}

// const mapStateToProps = (state) => {
//     console.log(state) 
//     return {
//     classes: state.classes
//     }
// }
export default connect(null,{searchClass})(ClientSearch);