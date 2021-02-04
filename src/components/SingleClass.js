import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
const SingleClass = (props) => {
    const {inclass} = props;

    const joinFitnessClass = (e) => {
        // console.log(inclass.id)
      
        // const classObj = {...inclass,signedUp:inclass.signedUp+1}
        // console.log(classObj.id)
        // props.joinClass(classObj);
    axiosWithAuth().get("https://anytime-fitness.herokuapp.com/api/auth/users/classes")
    .then(res=>{
      const arr = res.data.data.map(item => {
          if(item.id === inclass.id ){
              return {...item,signedUp: item.signedUp+1}
          }else{
              return item;
          } 
      })
      res.data.data = arr;
      console.log(arr)
      console.log(res)
    })
    .catch(drama=>{
        
    })
       }

    return (
    <div className="class" key={inclass.id}>
    <div>
    <h4>{inclass.name}</h4>
    <h5>Instructor: {inclass.instructor_name}</h5>
    <p>Date:{inclass.date}</p>
    <p>{inclass.type} | {inclass.intensity} intensity</p>
    <p>Duration: {inclass.duration} hrs</p>
    <p>Location: {inclass.location}</p>
    <p>Max. class size: {inclass.max_size}</p>
    </div>
  <button onClick = {joinFitnessClass}>Join class</button>
</div>
    )
}

export default SingleClass;