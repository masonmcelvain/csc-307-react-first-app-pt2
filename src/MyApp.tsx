import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';
import Table from './Table';
import { Character } from './types';

const baseEndpoint = "http://127.0.0.1:5000/";

async function fetchAll(): Promise<Character[]> {
  try {
    const response = await axios.get(baseEndpoint + "users");
    return response.data.users_list;
  }
  catch (error) {
    // We're not handling errors. Just logging into the console.
    console.log(error);
    return [];
  }
}

async function makePostCall(person: Character): Promise<any> {
  try {
    const response = await axios.post(baseEndpoint + "users", person);
    return response;
  }
  catch (error) {
    console.log(error);
    return false;
  }
}

export default function MyApp() {
  const [characters, setCharacters] = useState<Character[]>([]);

  // Fetch the data from the backend on mount
  useEffect(() => {
    fetchAll().then(newCharacters => {
      if (newCharacters) {
        setCharacters(newCharacters);
      }
    })
  }, []);

  function removeOneCharacter(index: number): void {
    const updatedCharacters = characters.filter((character, i) => i !== index);
    setCharacters(updatedCharacters);
  };

  function addCharacter(person: Character): void {
    makePostCall(person).then(response => {
      if (response && response.status === 201) {
        let responsePerson = response.data.user;
        setCharacters([...characters, responsePerson]);
      }
    });
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={addCharacter}/>
    </div>
  );
}
