import React, {useState} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

const app = (props) => {
    const [state, setState] = useState({
        inputLength: 0,
        inputValue: ''
    });

    const inputChangeHandler = (event) => {
        setState({
            inputLength: event.target.value.length,
            inputValue: event.target.value
        });
    }

    const deleteCharHandler = (charIndex) => {
        const length = state.inputLength;

        const chars = state.inputValue.split('');
        chars.splice(charIndex, 1);

        const newText = chars.join('');

        setState({
            inputValue: newText,
            inputLength: length
        });
    }
    
    const charList = state.inputValue.split('').map((char, index) => {
        return (
            <Char
                char={char}
                key={index}
                click={() => deleteCharHandler(index)}
            />
        );
    });

    return (
        <div className="App">
            <h3>Validation & Char separation task</h3>
            <label>Input a text:
                <input type="text" onChange={inputChangeHandler} value={state.inputValue} placeholder="text"/>
            </label>

            <Validation length={state.inputLength}/>

            {charList}
        </div>
    );
}

export default app;
