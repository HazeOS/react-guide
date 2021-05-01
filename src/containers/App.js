import React, {Component} from "react";
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from "../hoc/Auxiliary";
import withClass from "../hoc/withClassNew";
import AuthContext from "../context/auth-context";

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
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                showPersons: true,
                changeCounter: prevState.changeCounter + 1
            }
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

    loginHandler = () => {
        this.setState({
            authenticated: true
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
                    isAuthenticated={this.state.authenticated}
                />
            );
        }

        return (
            <Aux classes={classes.App}>
                <button onClick={this.showCockpitHandler}>Toggle Cockpit show</button>
                <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
                    {this.state.showCockpit ?
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length}
                            clicked={this.showPersonsHandler}
                        />
                        : null}

                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
