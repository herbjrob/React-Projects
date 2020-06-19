import React from 'react';


const validationComponent = (props) => {

  let text = <p>Text long enough</p>

  if (props.len < 5){
    text = <p>Text too short</p>
  }

  return (
      <div className="ValidationComponent">
        {text}
      </div>
  )
};

export default validationComponent;