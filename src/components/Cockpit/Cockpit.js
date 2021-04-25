import React, {useEffect} from "react";
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        setTimeout(() => {
            alert('Saved Data to Cloud');
        }, 1000);

        return () => {
            console.log('[Cockpit.js] useEffect clean up...');
        };
    }, []);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>And It's working</p>

            <button
                className={btnClass}
                onClick={props.clicked}>
                Show persons
            </button>
        </div>
    );
}

export default cockpit;