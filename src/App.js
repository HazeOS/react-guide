import React, {useState} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Ilya', age: 23},
            {name: 'Vasyl', age: 25},
            {name: 'Peta', age: 30}
        ],
        showPersons: false
    });

    const [otherState, setOtherState] = useState('someValue');

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Ilya', age: 18},
                {name: event.target.value, age: 25},
                {name: 'Peta', age: 30}
            ],
            showPersons: true
        });
    }

    const deletePersonHandler = (personIndex) => {
        const persons = [...personsState.persons];
        persons.splice(personIndex, 1);
        setPersonsState({
            persons: persons,
            showPersons: true
        });
    }

    const showPersonsHandler = () => {
        const showPersons = personsState.showPersons;
        setPersonsState({
            persons: [...personsState.persons],
            showPersons: !showPersons
        });
    }

    let persons = null;
    let btnClass = '';

    if (personsState.showPersons) {
        persons = (
            <div>
                {personsState.persons.map((person, index) => {
                    return (
                        <Person
                            name={person.name}
                            age={person.age}
                            key={index}
                            changed={nameChangedHandler}
                            click={() => deletePersonHandler(index)}>
                            My hobby: Nothing
                        </Person>
                    );
                })}
            </div>
        );

        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (personsState.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (personsState.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.App}>
            <h1>This is React Application.</h1>
            <p className={assignedClasses.join(' ')}>And It's working</p>

            <button
                className={btnClass}
                onClick={showPersonsHandler}>
                Show persons
            </button>
            {persons}
        </div>
    );
}

export default app;
