import React from 'react';

const SingleClass = (props) => {
    const {inclass} = props;

    const joinClass = (e) => {
        console.log(inclass.id)
       }

    return (
    <div className="class" key={inclass.id}>
    <h4>{inclass.name}</h4>
    <h6>{inclass.instructor_name}</h6>
    <p>{inclass.date}</p>
    <p>{inclass.type} | {inclass.intensity}</p>
    <p>{inclass.duration} hrs</p>
    <p>{inclass.location}</p>
    <p>{inclass.max_size}</p>
  <button onClick = {joinClass}>Join class</button>
</div>
    )
}

export default SingleClass;