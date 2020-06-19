import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const originName = props.name
    return (
        <div className="UserInput">
            <h1>Original User is {originName}</h1>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default userInput;