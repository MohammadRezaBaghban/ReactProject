import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state ={
    profiles : [
      {name:"Mohammad", height:"183"},
      {name:"Sara", height:"164"},
      {name:"Jackson", height:"175"}
    ],
    showPersonProfiles : false
  }

  clickHandler = (newName) =>{
    console.log("I was clicked!")
    this.setState({
      profile : [
        {name:"Sascha", height:"190"},
        {name:newName, height:"164"},
        {name:"Peter", height:"123"}
      ]
    })
  }

  nameChangeHandler = (event,index) => {
    const profiles = this.state.profiles;
    profiles[index].name = event.target.value;
    this.setState({
      profiles : profiles
    })
  }

  deletePerson = (indexOfPerson) => {
    let currentPersons =  this.state.profiles;
    currentPersons.splice(indexOfPerson,1);
    this.setState({profiles:currentPersons})
  }

  togglePersonHandler = () => {
    const result = !this.state.showPersonProfiles;
    this.setState({showPersonProfiles: result})
  }

  render(){

    let style = {
      backgroundColor: "green",
      color:"white",
      font : "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    
    let persons = null;
    if(this.state.showPersonProfiles){


      persons = (
        <div>
          {this.state.profiles.map((person,index)=>{
            return <Person 
              name={person.name}
              height={person.height}
              click = {() => this.deletePerson(index)}
              key={index}
              changed = {(event) => this.nameChangeHandler(event,index)}
            />
          })}
          
          <button 
            onClick={this.clickHandler.bind(this, "Mrbh")}
            style={style}
          >Click Me!</button>
        </div>
      )

      style.backgroundColor = 'red';

    }else{
      persons = (
        <div>
          <p>
          Please toggle the button to show people
          </p>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
        <button 
            style={style}
            onClick={this.togglePersonHandler}
          >
              Toggle Persons
          </button>
          {persons}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>         
        </header>
      </div>
    );
  }

}

export default App;
