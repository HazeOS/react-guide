import React, {Component} from "react";
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.showPersonsHandler}
                />

                {persons}
            </div>
        );
    }
}

export default App;
