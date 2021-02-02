import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addClass } from '../actions/index';
import DatePicker from 'react-date-picker'

const initForm={
    name: "",
    date: new Date(),
    type: "",
    intensity: "",
    location: "",
    max_size: "",
    duration: "",
    instructor_name: "",
    signedUp: false
}

function NewClass(props){
    const [form, setForm] = useState(initForm);

    function handleChange(e){
        if(e.target.name === "duration" || e.target.name === "max_size"){
            setForm({
                ...form,
                [e.target.name]: parseFloat(e.target.value)
          })
        }
        else{
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
    }

    function submitHandler(e){
        e.preventDefault();
        console.log(form);
        setForm(initForm);
        props.hide(true)
        props.addClass(form)
    }
    return(
        <form onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="Class name" onChange={handleChange} value={form.name}/><br/>
            <input type ="text" name="instructor_name" placeholder="Your name" onChange={handleChange} value={form.instructor_name}/><br/>
            <DatePicker name="date" onChange={(e)=>setForm({...form, date: e.toDateString()})} value={form.date}/><br/>
            <input type="text" name="type" placeholder="Workout type" onChange={handleChange} value={form.type}/><br/>
            <input type="text" name="intensity" placeholder="Workout intensity" onChange={handleChange} value={form.intensity}/><br/>
            <input type="text" name="location" placeholder="Location" onChange={handleChange} value={form.location}/><br/>
            <input type="text" name="max_size" placeholder="Class size" onChange={handleChange} value={form.max_size}/><br/>
            <input type="text" name="duration" placeholder="Approx. class duration" onChange={handleChange} value={form.duration}/><br/><br/>
            <button>submit</button>
        </form>
    )
}

const mapStateToProps=state=>{
    return {}
}
export default connect(mapStateToProps, { addClass })(NewClass)