import React, {Component} from "react";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClassNew";
import Aux from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] is rendering...');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>NOT Authenticated</p>}
                <p onClick={this.props.clicked}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);