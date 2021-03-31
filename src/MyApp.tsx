import { useState } from 'react';
import Form from './Form';
import Table from './Table';
import { Character } from './types';

export default function MyApp() {
  const [characters, setCharacters] = useState<Character[]>([]);

  function removeOneCharacter(index: number): void {
    const updatedCharacters = characters.filter((character, i) => i !== index);
    setCharacters(updatedCharacters);
  };

  function addCharacter(person: Character): void {
    setCharacters([...characters, person]);
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={addCharacter}/>
    </div>
  );
}
