import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './mocks/handlers.js';
import Character from './components/Character'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [ data, setData ] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  console.log("rendered") // shows rendered in console everytime this function runs

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
      .then(res => {
        // console.log(res.data[0].name); 
        setData(res.data[0])
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map(character => {return <Character name={data.name} year={data.birth_year}/>})}
      
    </div>
  );
}


export default App;
