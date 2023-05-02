import { feed, play, rest } from '../lib/gameActions';

export default function Options({ bulbasaur, setBulbasaur, setMessage }) {
  return (
    <div>
      <button onClick={() => feed(bulbasaur, setBulbasaur, setMessage)}>Feed</button>
      <button onClick={() => play(bulbasaur, setBulbasaur, setMessage)}>Play</button>
      <button onClick={() => rest(bulbasaur, setBulbasaur, setMessage)}>Rest</button>
    </div>
  );
}