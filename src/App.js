import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Ilya', age: 23},
            {name: 'Vasyl', age: 25},
            {name: 'Peta', age: 30}
        ]
    });

    const [otherState, setOtherState] = useState('someValue');

    console.log(personsState, otherState);

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                {name: newName, age: 18},
                {name: 'Vasyl', age: 25},
                {name: 'Peta', age: 30}
            ]
        });
    }

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Ilya', age: 18},
                {name: event.target.value, age: 25},
                {name: 'Peta', age: 30}
            ]
        });
    }

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
        <div className="App">
            <h1>This is React Application.</h1>

            <p><b>Using State</b></p>
            <button
                style={style}
                onClick={() => switchNameHandler('ILYAS from arrow function')}>
                Switch Name
            </button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}>
                My hobby: Nothing
            </Person>

            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={switchNameHandler.bind(this, 'ILYAS from BIND')}
                changed={nameChangedHandler}
            />

            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
                click={() => switchNameHandler('ILYAS from arrow function')}
            />

        </div>
    );
}

export default app;
