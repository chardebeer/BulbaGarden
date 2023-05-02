import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StartContainer = styled.div`
  text-align: center;
`;

const StartButton = styled.button`
  /* Add your custom styles here */
`;

export default function Start() {
  const [name, setName] = useState('');

  return (
    <StartContainer>
      <h1>Welcome to BulbaGarden!</h1>
      <input
        type="text"
        placeholder="Enter your Bulbasaur's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link href={`/game?name=${name}`}>
        <StartButton disabled={!name}>Start Game</StartButton>
      </Link>
    </StartContainer>
  );
}
