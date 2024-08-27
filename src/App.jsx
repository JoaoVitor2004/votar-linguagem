import { useState } from 'react'
import { Container, Title, Linguagem } from './styles'

function App() {

  const [counts, setCounts] = useState({
    Javascript: 0,
    Typescript: 0,
    Bootstrap: 0,
    Python: 0,
    Php: 0,
    cSharp: 0,
    Java: 0
  });

  function handleClick(language) {
    setCounts(prevCounts => ({
      ...prevCounts,
      [language]: prevCounts[language] + 1
    }));
  }

  return (
    <Container>
      <Title>Votar Linguagem</Title>
      <Linguagem onClick={() => handleClick('Javascript')} color='#F7E025'>
        Javascript
        <span>{counts.Javascript}</span>
      </Linguagem>
      <Linguagem onClick={() => handleClick('Typescript')} color='#0B7ECE'>
        Typescript
        <span>{counts.Typescript}</span>
      </Linguagem>
      <Linguagem onClick={() => handleClick('Bootstrap')} color='#7F18F9'>
        Bootstrap
        <span>{counts.Bootstrap}</span>
      </Linguagem>
      <Linguagem onClick={() => handleClick('Python')} color='#FFCE40'>
        Python
        <span>{counts.Python}</span>
      </Linguagem>
      <Linguagem onClick={() => handleClick('Php')} color='#7B7FB5'>
        Php
        <span>{counts.Php}</span>
      </Linguagem>
      <Linguagem onClick={() => handleClick('cSharp')} color='#2F086D'>
        C-Sharp
        <span>{counts.cSharp}</span>
      </Linguagem>
      <Linguagem onClick={() => handleClick('Java')} color='#E25040'>
        Java
        <span>{counts.Java}</span>
      </Linguagem>
    </Container>
  )
}

export default App