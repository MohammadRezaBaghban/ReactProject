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
    ]
  }

  clickHandler = () =>{
    console.log("I was clicked!")
    this.setState({
      profile : [
        {name:"Sascha", height:"190"},
        {name:"Sara", height:"164"},
        {name:"Peter", height:"123"}
      ]
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
          <div>
            <Person name={this.state.profile[0].name} height={this.state.profile[0].height}/>
            <Person name={this.state.profile[1].name} height={this.state.profile[1].height}> Max</Person>
            <Person name={this.state.profile[2].name} height={this.state.profile[2].height}/>
            <button onClick={this.clickHandler}>Click Me!</button>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
