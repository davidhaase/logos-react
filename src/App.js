import React from 'react';
import './App.css';

class App extends React.Component {

  constructor (){
    super();

    this.state = {
      content : '',
      language : 'en'
    }

  }

  componentDidMount() {
    fetch('/cms')
    .then(response => response.json())
    .then(content => this.setState({content : content.greeting}))
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
