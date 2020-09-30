import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad' , type:'salad'},
    { label: 'Bacon' , type:'bacon'},
    { label: 'Cheese' , type:'cheese'},
    { label: 'Meat' , type:'meat'}
]
    

const buildControls = (props) =>{ 
    
    let elements = controls.map(element =>{
    return <BuildControl key={element.label} label={element.label} type={element.type}/>
    })
    

    return( 
        <div className={classes.BuildControls}>
            {elements}
        </div>
    );
    

};

export default buildControls;