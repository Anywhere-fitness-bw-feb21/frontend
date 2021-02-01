import React, { useState } from 'react';
import { connect } from 'react-redux';

import NewClass from './NewClass'

function InstructorDashboard(props){
    const [hidden, setHidden] = useState(true);

    function toggleHidden(e){
        e.preventDefault();
        setHidden(!hidden);
    }

    return(
    <div>
        <div className="classes">
            <h3>Your Classes:</h3>
            {/* these next lines return an error if there's an error in state, or maps through the class array */}
            {props.error ? <p classname="error">{props.state.error}</p> : <div>
                {props.classes.map(inclass=>{//Its called inclass because "class" is a JS keyword, so instructors class -> inclass
                        return(
                        <div className="class">
                            <h4>{inclass.name}</h4>
                            <p>{inclass.date}</p>
                            <p>{inclass.type} | {inclass.intensity}</p>
                            <p>{inclass.duration}</p>
                            <p>{inclass.location}</p>
                            <p>{inclass.max_size}</p>
                        </div>
                        )
                    }
                )}
            </div>}
            {/* end of classList conditional, next line is a coniditional to add a new class */}
            {hidden ? <button onClick={toggleHidden}>Add Class</button> : <NewClass hide={setHidden}/>}
            
        </div>

    </div>
    )
}

const mapStateToProps = state =>{
    return{
        classes: state.classes,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(InstructorDashboard)