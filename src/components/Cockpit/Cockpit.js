import React, {useContext, useEffect, useRef} from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // setTimeout(() => {
        //     console.log('Saved Data to Cloud');
        // }, 1000);
        toggleButtonRef.current.click();

        return () => {
            console.log('[Cockpit.js] useEffect clean up...');
        };
    }, []);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>And It's working</p>

            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>
                Show persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default React.memo(cockpit);