import Table from './Table';
import { Character } from './types';

const characters: Character[] = [
  {
    name: 'Charlie',
    job: 'Janitor',
  },
  {
    name: 'Mac',
    job: 'Bouncer',
  },
  {
    name: 'Dee',
    job: 'Aspring actress',
  },
  {
    name: 'Dennis',
    job: 'Bartender',
  },
];

export default function MyApp() {
  return (
    <div className="container">
      <Table characterData={characters}/>
    </div>
  );
}
