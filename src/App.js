import React, { Component } from 'react';
import './App.css';

import GenerateSimpson from './GenerateSimpson';
import DisplaySimpson from './DisplaySimpson';

const sampleSimpson = {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection: "Left"
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: sampleSimpson
    }
  }
  getSimpson = () => {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
      .then(response => response.json())
      .then(data => {
        this.setState({
          simpson: data[0],
        });
      })
  }
  render() {
    return (
      <div className="App">
        <GenerateSimpson selectSimpson={() => this.getSimpson()} />
        <DisplaySimpson simpson={this.state.simpson} />
      </div>
    );
  }
}

export default App;