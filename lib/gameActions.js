import { saveBulbasaurData, getBulbasaurData } from './airtable';

export async function feed(bulbasaur, setBulbasaur, setMessage) {
    const updatedBulbasaur = {
      ...bulbasaur,
      hunger: Math.min(bulbasaur.hunger + 20, 100),
    };
    setMessage(`${bulbasaur.name} ate some food and is feeling better!`);
    setBulbasaur(updatedBulbasaur);
    await saveGame(updatedBulbasaur);
  }
  
  export async function play(bulbasaur, setBulbasaur, setMessage) {
    const updatedBulbasaur = {
      ...bulbasaur,
      happiness: Math.min(bulbasaur.happiness + 20, 100),
      hunger: Math.max(bulbasaur.hunger - 10, 0),
    };
    setMessage(`${bulbasaur.name} had some fun and is feeling happier!`);
    setBulbasaur(updatedBulbasaur);
    await saveGame(updatedBulbasaur);
  }
  
  export async function rest(bulbasaur, setBulbasaur, setMessage) {
    const updatedBulbasaur = {
      ...bulbasaur,
      health: Math.min(bulbasaur.health + 20, 100),
      hunger: Math.max(bulbasaur.hunger - 10, 0),
    };
    setMessage(`${bulbasaur.name} took a nap and is feeling better!`);
    setBulbasaur(updatedBulbasaur);
    await saveGame(updatedBulbasaur);
  }
  

export async function saveGame(bulbasaur) {
  await saveBulbasaurData(bulbasaur);
}

// Add any other game-related actions here
