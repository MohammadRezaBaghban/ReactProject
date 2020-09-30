import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import withClass from  '../../../hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  constructor(props){
    super(props);
    this.inputElement = React.createRef()
  }

  componentDidMount(){
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <AuthContext.Consumer>
         {(context)=> context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input
              type="text"
              //ref={(inputEl)=>{this.inputElement=inputEl}}
              ref = {this.inputElement}
              onChange={this.props.changed}
              value={this.props.name}
    
            />
      </Aux>     
    );
  }
}

Person.PropTypes = {
  click : PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person,classes.Person);
