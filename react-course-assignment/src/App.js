import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import LengthValidator from './LengthValidator/LengthValidator';

class App extends Component {

  state ={
    profile : [
      {name:"Mrbh"},
      {name:"Ladewig"},
      {name:"Charada"}
    ],
    paragraph: "This a dummy paragraph to be used"
  }

  changeNameHandler = (event) =>{
    this.setState({
      profile : [
        {name:"Mrbh12"},
        {name: event.target.value},
        {name:"CharadaCharada"}
      ]
    })
  } 

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserInput name={this.state.profile[1].name} handler={this.changeNameHandler}/>
          <UserOutput name="Mohammad" userName={this.state.profile[0].name}/>
          <UserOutput name="Sascha" userName={this.state.profile[1].name}/>
          <UserOutput name="Haifa" userName={this.state.profile[2].name}/>
          <LengthValidator pValue={this.state.paragraph}/>
        </header>
      </div>
    );
  }
}

export default App;
