import React, {Component} from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: 0, name: 'Ilya', age: 23},
            {id: 1, name: 'Vasyl', age: 25},
            {id: 2, name: 'Peta', age: 30}
        ],
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((person) => {
            return person.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
            showPersons: true
        });
    }

    deletePersonHandler = (personId) => {
        const personIndex = this.state.persons.findIndex((person) => {
            return person.id === personId;
        });
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);

        this.setState({
            persons: persons,
            showPersons: true
        });
    }

    showPersonsHandler = () => {
        const showPersons = this.state.showPersons;
        this.setState({
            persons: [...this.state.persons],
            showPersons: !showPersons
        });
    }

    render() {
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person) => {
                        return (
                            <ErrorBoundary key={person.id}>
                                <Person
                                    name={person.name}
                                    age={person.age}
                                    changed={event => this.nameChangedHandler(event, person.id)}
                                    click={() => this.deletePersonHandler(person.id)}>
                                    My hobby: Nothing
                                </Person>
                            </ErrorBoundary>
                        );
                    })}
                </div>
            );

            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red); // classes = ['red']
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold); // classes = ['red', 'bold']
        }

        return (
            <div className={classes.App}>
                <h1>This is React Application.</h1>
                <p className={assignedClasses.join(' ')}>And It's working</p>

                <button
                    className={btnClass}
                    onClick={this.showPersonsHandler}>
                    Show persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
