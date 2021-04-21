import React from 'react';

const validation = (props) => {
    const minLength = 5;
    const maxLength = 15;
    let validationOutput = null;

    if (props.length === 0) {
        validationOutput = null;
    } else {
        if (props.length >= minLength && props.length <= maxLength) {
            validationOutput = (
                <div>
                    <p>Text length is OK (between 5 and 15)</p>
                </div>
            );
        } else if (props.length < minLength) {
            validationOutput = (
                <div>
                    <p>Text length is too <b>short</b></p>
                </div>
            );
        } else if (props.length > maxLength) {
            validationOutput = (
                <div>
                    <p>Text length is too <b>long</b></p>
                </div>
            );
        }
    }

    return (validationOutput);
}

export default validation;