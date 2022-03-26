// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

// styling divs
const Styles = styled.h2`
    
h2 {
    display: flex;
    justify-content: space-between;
}

`;



export default function Character(props) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(res => { 
            console.log(res.data)
          setCharacters(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
      <Styles className='characters'>
        {characters.map((char) => {
        return <h2>{char.name} {char.birth_year}</h2>
            
})} 
      </Styles>
    )
  }

// console.log("Luke Skywalker")