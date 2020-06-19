import React from 'react';

const userOutput = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
        <div className="UserOutput">
            <p style={style}>{props.name} is logged in.</p>
            <p>Just adding some content for this example.</p>
        </div>
    )
};

export default userOutput;