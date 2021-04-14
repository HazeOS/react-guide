import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Ilya', age: 23},
            {name: 'Vasyl', age: 25},
            {name: 'Peta', age: 30}
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>This is React Application.</h1>

                <p><b>Using State</b></p>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobby: Nothing</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

                <br/>

                <p><b>Without using State</b></p>
                <Person name="Ilya" age="23">My hobby: Nothing</Person>
                <Person name="Vasyl" age="25"/>
                <Person name="Peta" age="30"/>
            </div>
        );
    }
}

export default App;
