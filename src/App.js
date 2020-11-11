import React from 'react';
import './App.css';

class App extends React.Component {

  constructor (){
    super();

    this.state = {
      content : ''
    }

  }

  componentDidMount() {
    fetch('/cms')
    .then(response => response.json())
    .then(greeting => this.setState({content : greeting.greeting}))
  }


  
  render () {

    console.log(this.state.content);
    return (
      <div>
        <h1>{this.state.content}</h1>
      </div>
    );
  }
}

export default App;
