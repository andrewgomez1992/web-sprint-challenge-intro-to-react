// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Styles = styled.h2`
    
h2 {
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
}

div {
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding-left: 5%;
  border: 6px solid #6c6161;
  margin: 5%
}

div:hover {
  background: white;
  color: black;
}

button {
  margin-right: 2%;
  padding-left: 2em;
  padding-right: 2em;
  font-size: 1rem;
  font-weight: bolder;
  border: 2px solid #443e3e;
  background-color: #201d1d;
  color: #6c6161;
  border-radius: 25px;
}

button:hover {
  transform: scale(1.15)
}
`;

export default function Character() {

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
        {characters.map(char => (
            <div>
                <h2>{char.name}</h2>
                <button>{char.birth_year}</button>
            </div>
        ))} 
      </Styles>
    )
  }
