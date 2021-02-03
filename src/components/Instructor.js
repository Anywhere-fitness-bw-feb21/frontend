import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../actions/index';
import styled from 'styled-components';

import NewClass from './NewClass'

function InstructorDashboard(props){
    const [hidden, setHidden] = useState(true);

    useEffect(()=>{
        props.getClasses()
    }, [])

    function toggleHidden(e){
        e.preventDefault();
        setHidden(!hidden);
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
                        </div>
                        )
                    }
                )}
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
        error: state.error
    }
}
export default connect(mapStateToProps, { getClasses })(InstructorDashboard)

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