import React from 'react';
import ReactDOM from "react-dom"
import './App.css';

class App extends React.Component {
  state = {
    name: "circle"
  }

  startRotation = () => {
    this.setState({
      name: "circle start-rotate"
    });
  }
  
  render() {
    return (
      <div>
      <h1> A simple spinner for a random color in Among Us. Hope you enjoy! :)</h1>
      <div className="arrow"></div>
        <ul className={ this.state.name }>
          <li>
            <div 
              className="text"
              contentditable="true"
              spellcheck="false">Purple</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Brown</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Cyan</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Red</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Yellow</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Green</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Lime</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Pink</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Orange</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Blue</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">Black</div>
          </li>
          <li>
            <div 
              className="text"
              contenteditable="true"
              spellcheck="false">White</div>
          </li>
        </ul>
        <button className="spin-button"
        onClick={ this.startRotation }>SPIN</button>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
