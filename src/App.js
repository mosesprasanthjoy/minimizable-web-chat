import React, { Component } from 'react';
import MinimizableWebChat from './MinimizableWebChat';

//import WebPageBackground from './WebPage.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         
        <MinimizableWebChat />
      </div>
    );
  }
}

export default App;
