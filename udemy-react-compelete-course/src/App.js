import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state ={
    profile : [
      {name:"Mohammad", height:"183"},
      {name:"Sara", height:"164"},
      {name:"Jackson", height:"175"}
    ],
    showPersonProfiles : false
  }

  style = {
    backgroundColor: "white",
    font : "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

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

  nameChangeHandler = (event) => {
    this.setState({
      profile : [
        {name:"Sascha", height:"190"},
        {name:event.target.value, height:"164"},
        {name:"Peter", height:"123"}
      ]
    })
  }

  togglePersonHandler = () => {
    const result = !this.state.showPersonProfiles;
    this.setState({
      showPersonProfiles: result
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
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
          { this.state.showPersonProfiles ?
            <div>
              <Person 
                name={this.state.profile[0].name}
                height={this.state.profile[0].height}
              />
              <Person 
                name={this.state.profile[1].name} 
                height={this.state.profile[1].height}
                changed={this.nameChangeHandler}
              > Max</Person>
              <Person
              name={this.state.profile[2].name}
              height={this.state.profile[2].height}
              click ={()=>this.clickHandler("Haifa")}
              />
              <button 
                onClick={this.clickHandler.bind(this, "Mrbh")}
                style={this.style}
              >Click Me!</button>
            </div> : 
            <p>
              Please toggle the button to show people
            </p>
          }
          <button onClick={this.togglePersonHandler}>Toggle Persons</button>
          
        </header>
      </div>
    );
  }

}

export default App;
