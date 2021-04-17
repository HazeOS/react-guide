import React, {useState} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

const app = () => {
    const [userState, setUserState] = useState({
        name: 'Ilya'
    });

    const nameChangeHandler = (event) => {
        setUserState({
            name: event.target.value
        });
    }


    return (
        <div className="App">
            <UserInput name={userState.name} changeByInput={nameChangeHandler}/>
            <UserOutput name={userState.name}/>
        </div>
    );
}

export default app;
