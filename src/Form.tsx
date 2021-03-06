import { useState } from 'react';
import { Character } from './types';

interface FormProps {
  handleSubmit: (person: Character) => void,
}

export default function Form({ handleSubmit }: FormProps) {
  const emptyPerson: Character = { name: '', job: ''};
  const [person, setPerson] = useState<Character>(emptyPerson);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const {name, value} = event.target;
    if (name === "job") {
      setPerson({name: person.name, job: value});
    } else {
      setPerson({name: value, job: person.job});
    }
  }

  function submitForm(): void {
    handleSubmit(person);
    setPerson(emptyPerson);
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
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}
