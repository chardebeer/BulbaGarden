import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import BulbasaurStats from '../components/BulbasaurStats';
import Options from '../components/Options';
import MessageBar from '../components/MessageBar';
import { getBulbasaurData, saveBulbasaurData } from '../utils/airtable';

const GameContainer = styled.div`
  text-align: center;
`;

export default function Game() {
  const router = useRouter();
  const { name } = router.query;

  const [bulbasaur, setBulbasaur] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await getBulbasaurData(name);
      setBulbasaur(data);
    }

    if (name) {
      fetchData();
    }
  }, [name]);

  const updateData = async () => {
    await saveBulbasaurData(bulbasaur);
    setMessage('Data saved successfully!');
  };

  if (!bulbasaur) {
    return <div>Loading...</div>;
  }

  return (
    <GameContainer>
      <h1>{name}'s BulbaGarden</h1>
      <BulbasaurStats bulbasaur={bulbasaur} />
      <Options bulbasaur={bulbasaur} setBulbasaur={setBulbasaur} setMessage={setMessage} />
      <MessageBar message={message} />
      <button onClick={updateData}>Save</button>
    </GameContainer>
  );
}
