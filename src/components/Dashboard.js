import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getClasses, setEditing } from '../actions/index';
import ClientSearch from './ClientSearch';
import SingleClass from './SingleClass';


function Dashboard(props){
   
    useEffect(()=>{
        props.getClasses()
    }, [])

 
    return(
    <div>
        <ClientSearch />
            <p>Available classes</p>
            <div  className="classes">
                {props.classes.map(inclass=>{//Its called inclass because "class" is a JS keyword, so instructors class -> inclass
                        return(<SingleClass key= {inclass.id} inclass = {inclass}/> )
                    }
                )} 
            </div>
    </div>
    )
}

const mapStateToProps = state =>{
    return{
        classes: state.classes,
        error: state.error,
        editing: state.editing
    }
}
export default connect(mapStateToProps, { getClasses, setEditing })(Dashboard)
