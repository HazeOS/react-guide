import React from "react";
import Person from "./Person/Person";

const persons = (props) => {
    return props.persons.map((person) => {
        return (
            <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => props.changed(event, person.id)}
                clicked={() => props.click(person.id)}>
                My hobby: Nothing
            </Person>
        );
    });
}

export default persons;