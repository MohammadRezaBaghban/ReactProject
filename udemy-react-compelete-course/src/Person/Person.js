import React from 'react';
import './Person.css'

const person = (props) =>{
return(
    <div className="Person">
        <p onClick={props.click}>Hello {props.children}, My name is {props.name} and I am {Math.floor(Math.random()*30)} years old with {props.height}cm height.</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;

