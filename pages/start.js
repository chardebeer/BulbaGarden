import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { saveBulbasaurData } from '../lib/airtable';

const StartContainer = styled.div`
  text-align: center;
`;

const StartButton = styled.button`
  /* Add your custom styles here */
`;

export default function Start() {
  const [name, setName] = useState('');

  const handleStartGame = async () => {
    // Save the Bulbasaur's name to Airtable
    await saveBulbasaurData({ name, hunger: 50, happiness: 50, health: 100 });

    // Redirect the user to the game page
    window.location.href = `/game?name=${name}`;
  };

  return (
    <StartContainer>
      <h1>Welcome to BulbaGarden!</h1>
      <input
        type="text"
        placeholder="Enter your Bulbasaur's name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StartButton disabled={!name} onClick={handleStartGame}>
        Start Game
      </StartButton>
    </StartContainer>
  );
}
