import React, { useEffect, useState } from 'react';
import { editClass, cancelEdit, getClasses } from '../actions/index';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


function EditClass(props){
    const [form, setForm] = useState({})
    useEffect(()=>{
        let edit = props.classes.find(item=>{
            if(item.id === parseInt(props.edit)){
                return item
            }
            return ""
        })
        setForm(edit)
    },[])

    function handleChange(e){
        if(e.target.name ==="duration" || e.target.name === "max_size"){
            setForm({
                ...form,
                [e.target.name]: parseFloat(e.target.value)
            })
        }
        
            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
    }
    function handleSubmit(e){
        e.preventDefault();
        props.editClass(form);
        props.getClasses();
    }
    function handleCancel(e){
        e.preventDefault();
        props.cancelEdit();
    }
    return(<div><form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Class name" onChange={handleChange} value={form.name}/><br/>
        <input type ="text" name="instructor_name" placeholder="Your name" onChange={handleChange} value={form.instructor_name}/><br/>
        <DatePicker name="date" format="MM/dd/y" onChange={(e)=>{setForm({...form, date: e.toDateString()})}} value={form.date}/><br/>
        <input type="text" name="type" placeholder="Workout type" onChange={handleChange} value={form.type}/><br/>
        <input type="text" name="intensity" placeholder="Workout intensity" onChange={handleChange} value={form.intensity}/><br/>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} value={form.location}/><br/>
        <input type="text" name="max_size" placeholder="Class size" onChange={handleChange} value={form.max_size}/><br/>
        <input type="text" name="duration" placeholder="Approx. class duration" onChange={handleChange} value={form.duration}/><br/><br/>
        <button>submit</button>
    </form><br/>
    <button onClick={handleCancel}>Cancel</button>
    </div>)
}
const mapStateToProps = state =>{
    return{
        edit: state.edit,
        classes: state.classes
    }
}
export default connect(mapStateToProps, { editClass, cancelEdit, getClasses })(EditClass);
