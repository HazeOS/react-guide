import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

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
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        fontWeight: '600',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
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

        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    let classes = ['red', 'bold'].join(' ');

    return (
        <StyleRoot>
            <div className="App">
                <h1>This is React Application.</h1>
                <p className={personsState.showPersons ? classes : ''}>And It's working</p>

                <button
                    style={style}
                    onClick={showPersonsHandler}>
                    Show persons
                </button>
                {persons}
            </div>
        </StyleRoot>
    );
}

export default Radium(app);
