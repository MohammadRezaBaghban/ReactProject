import React from 'react';

const lengthValidator = (props) =>{

    let lengthFeedback = null;

    if(props.pValue.length<5){
        lengthFeedback = (<p>Text is too short</p>);
    }else if(props.pValue.length>20){
        lengthFeedback = (<p>Text is too long</p>);
    }

    return(
        <div>
            <p>{props.pValue}</p>
            <p>The Length of Above Paragraph is: 
            <input 
              type="text"
              value={props.pValue.length}
              />
            </p>
            {lengthFeedback}
          </div>
    )
}

export default lengthValidator;