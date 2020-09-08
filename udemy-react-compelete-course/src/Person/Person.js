import React from 'react';

const person = (props) =>{
return(
    <p>Hello {props.children}, My name is {props.name} and I am {Math.floor(Math.random()*30)} years old with {props.height}cm height.</p>
)
}

export default person;

