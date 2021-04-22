import React, {useState} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {id: 0, name: 'Ilya', age: 23},
            {id: 1, name: 'Vasyl', age: 25},
            {id: 2, name: 'Peta', age: 30}
        ],
        showPersons: false
    });

    const [otherState, setOtherState] = useState('someValue');

    const nameChangedHandler = (event, id) => {
        const personIndex = personsState.persons.findIndex((person) => {
            return person.id === id;
        });

        const person = {
            ...personsState.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...personsState.persons];
        persons[personIndex] = person;

        setPersonsState({
            persons: persons,
            showPersons: true
        });
    }

    const deletePersonHandler = (personId) => {
        const personIndex = personsState.persons.findIndex((person) => {
            return person.id === personId;
        });
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
                {personsState.persons.map((person) => {
                    return (
                        <Person
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={event => nameChangedHandler(event, person.id)}
                            click={() => deletePersonHandler(person.id)}>
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
