import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    if (props.name.length > 15) {
        throw new Error('Name is way too long....');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;