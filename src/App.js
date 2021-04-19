import React, {useState} from 'react';
import './App.css';
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

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

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
    }
    return (
        <div className="App">
            <h1>This is React Application.</h1>

            <button
                style={style}
                onClick={showPersonsHandler}>
                Show persons
            </button>
            {persons}
        </div>
    );
}

export default app;
