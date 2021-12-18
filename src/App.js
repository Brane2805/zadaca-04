import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    korisnici: [
      { 
        ime: "Ana",
        godine: 24
    
      },
      {
        ime: "Ivo",
        godine: 34  
      },
      {
        ime: "Đuro",
        godine: 36  
      }
    
    ],
    proizvoljniText: props.children
  };
  }
  
  render() {
  return (
  <div className="App">
  <p>Prva osoba: {this.state.korisnici[0].ime}, {this.state.korisnici[0].godine} godine, {this.state.proizvoljniText='žensko'}.</p>
  <p>Druga osoba: {this.state.korisnici[1].ime}, {this.state.korisnici[1].godine} godine, {this.state.proizvoljniText='muško'}.</p>
  <p>Treća osoba: {this.state.korisnici[2].ime}, {this.state.korisnici[2].godine} godina, {this.state.proizvoljniText='muško'}.</p>
  </div>
  );
  }
  }

  
export default App;
