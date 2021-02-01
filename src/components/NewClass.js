import React, { useState } from 'react';
import { connect } from 'react-redux';

const initForm={
    name: "",
    date: "",
    type: "",
    intensity: "",
    location: "",
    max_size: "",
    duration: ""
}

function NewClass(props){
    const [form, setForm] = useState(initForm);

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function submitHandler(e){
        e.preventDefault();
        console.log(form);
        setForm(initForm);
        props.hide(true)
    }
    return(
        <form onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="Class name" onChange={handleChange} value={form.name}/>
            <input type="text" name="date" placeholder="Choose a date" onChange={handleChange} value={form.date}/>
            <input type="text" name="type" placeholder="Workout type" onChange={handleChange} value={form.type}/>
            <input type="text" name="intensity" placeholder="Workout intensity" onChange={handleChange} value={form.intensity}/>
            <input type="text" name="location" placeholder="Location" onChange={handleChange} value={form.location}/>
            <input type="text" name="max_size" placeholder="Class size" onChange={handleChange} value={form.max_size}/>
            <input type="text" name="duration" placeholder="Approx. class duration" onChange={handleChange} value={form.duration}/>
            <button>submit</button>
        </form>
    )
}

const mapStateToProps=state=>{
    return
}
export default connect(mapStateToProps, {})(NewClass)