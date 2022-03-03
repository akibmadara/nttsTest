import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn : false
    };
    //this.onToggle = this.onToggle.bind(this);
  }

  handleClick =()=> {
    this.setState(state=>({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {    
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        </div>
      
     
    );
  }
}

export default App;