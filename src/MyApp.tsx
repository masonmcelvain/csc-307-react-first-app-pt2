import { useState } from 'react';
import Table from './Table';
import { Character } from './types';
import charactersJson from './characters.json';

export default function MyApp() {
  const [characters, setCharacters] = useState<Character[]>(charactersJson);

  function removeOneCharacter(index: number): void {
    const updatedCharacters = characters.filter((character, i) => i !== index);
    setCharacters(updatedCharacters);
  };

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
    </div>
  );
}
