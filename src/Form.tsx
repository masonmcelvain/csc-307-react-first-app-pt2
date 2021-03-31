import { useState } from 'react';
import { Character } from './types';

export default function Form() {
  const [person, setPerson] = useState<Character>({ name: '', job: ''});

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const {name, value} = event.target;
    if (name === "job") {
      setPerson({name: person.name, job: value});
    } else {
      setPerson({name: value, job: person.job});
    }
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange} />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
        onChange={handleChange} />
    </form>
  );
}
