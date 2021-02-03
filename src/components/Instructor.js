import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getClasses, setEditing } from '../actions/index';
import styled from 'styled-components';

import NewClass from './NewClass'
import EditClass from './EditClass'
import axiosWithAuth from '../utils/axiosWithAuth';


function InstructorDashboard(props){
    const [hidden, setHidden] = useState(true);
    const history = useHistory()

    useEffect(()=>{
        props.getClasses()
    }, [])

    function toggleHidden(e){
        e.preventDefault();
        setHidden(!hidden);
    }
    function toggleEdit(e){
        console.log(e)
        e.preventDefault();
        props.setEditing(e.target.value);
    }
    function deleteClass(e){
        e.preventDefault();
        axiosWithAuth().delete(`auth/instructor/classes/${e.target.value}`)
        .then(res=>{
            console.log(res)
        })
        .catch(drama=>{
            console.log(drama)
        })
        props.getClasses();
    }

    return(
    <StyledDash>
            
            {/* these next lines return an error if there's an error in state, or maps through the class array */}
            {props.error ? <p classname="error">{props.error}</p> : <div>
            <p>Available classes</p>
            <div  className="classes">
                {props.classes.map(inclass=>{//Its called inclass because "class" is a JS keyword, so instructors class -> inclass
                        return(
                        <div className="class" key={inclass.id}>
                            <h4>{inclass.name}</h4>
                            <h6>{inclass.instructor_name}</h6>
                            <p>{inclass.date}</p>
                            <p>{inclass.type} | {inclass.intensity}</p>
                            <p>{inclass.duration} hrs</p>
                            <p>{inclass.location}</p>
                            <p>{inclass.max_size}</p>
                            <button value={inclass.id} onClick={toggleEdit}>Edit</button><br/>
                            <button value={inclass.id} onClick={deleteClass}>Delete Class</button>
                        </div>
                        )
                    }
                )}
                {props.editing ? <EditClass/> : <></>}
                </div>
                
            </div>}
            {/* end of classList conditional, next line is a coniditional to add a new class */}
            {hidden ? <button onClick={toggleHidden}>Add Class</button> : <NewClass hide={setHidden} getClasses={props.getClasses}/>}
    </StyledDash>
    )
}

const mapStateToProps = state =>{
    return{
        classes: state.classes,
        error: state.error,
        editing: state.editing
    }
}
export default connect(mapStateToProps, { getClasses, setEditing })(InstructorDashboard)

const StyledDash = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .classes{
        width: 100%;
        display: flex;
        flex-direction: wrap;
        align-items: center;
        justify-content: space-evenly;
    }
`