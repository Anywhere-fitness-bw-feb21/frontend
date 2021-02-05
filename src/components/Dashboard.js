import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClasses, setEditing } from '../actions/index';
import ClientSearch from './ClientSearch';
import SingleClass from './SingleClass';
import {StyledDashboard} from '../styledComponents/StyledDashboard'

function Dashboard(props){
   
    useEffect(()=>{
        props.getClasses()
    }, [])

 
    return(
    <StyledDashboard>
        <ClientSearch />
            <h3>Available classes</h3>
            {props.isFetching ? <h3>Data is loading... Please wait.</h3> :
            <div  className="classes">
                {props.classes.map(inclass=>{//Its called inclass because "class" is a JS keyword, so instructors class -> inclass
                        return(<SingleClass key= {inclass.id} inclass = {inclass}/> )
                    })
                 } 
            </div>}
    </StyledDashboard>
    )
}

const mapStateToProps = state =>{
   
    return{
        classes: state.classes,
        error: state.error,
        isFetching: state.isFetching
    }
}
export default connect(mapStateToProps, { getClasses, setEditing })(Dashboard)
