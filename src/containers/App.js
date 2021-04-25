import React, {Component} from "react";
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    state = {
        persons: [
            {id: 0, name: 'Ilya', age: 23},
            {id: 1, name: 'Vasyl', age: 25},
            {id: 2, name: 'Peta', age: 30}
        ],
        showPersons: false,
        showCockpit: true
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

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

    showCockpitHandler = () => {
        const showCockpit = this.state.showCockpit;
        this.setState({
            showCockpit: !showCockpit
        });
    }

    render() {
        console.log('[App.js] render');
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
                <button onClick={this.showCockpitHandler}>Toggle Cockpit show</button>
                {this.state.showCockpit ?
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.showPersonsHandler}
                    />
                    : null}

                {persons}
            </div>
        );
    }
}

export default App;
