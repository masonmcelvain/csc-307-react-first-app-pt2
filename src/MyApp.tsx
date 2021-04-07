import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';
import Table from './Table';
import { Character } from './types';

const baseEndpoint = "http://127.0.0.1:5000/";

export default function MyApp() {
  const [characters, setCharacters] = useState<Character[]>([]);

  // Fetch the data from the backend on mount
  useEffect(() => {
    axios.get(baseEndpoint + "users")
      .then(res => {
        setCharacters(res.data.users_list);
      })
      .catch(function (error) {
        console.log("GET request for /users failed:" + error);
      });
  }, []);

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
