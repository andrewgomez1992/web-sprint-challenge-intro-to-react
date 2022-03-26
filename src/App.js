import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import styled from 'styled-components';



// const H1 = styled.h1 `


// `;

// const AppDiv = styled.div`
//   color:black;

// `;


const object = ["James", "drew", "jon", "jeff"]

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [character, setCharacter] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Character />
    </div>
  );
}


export default App;
