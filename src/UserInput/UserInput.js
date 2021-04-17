import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <label>Input a name:
                <input type="text" value={props.name} onChange={props.changeByInput}/>
            </label>
        </div>
    );
}

export default userInput