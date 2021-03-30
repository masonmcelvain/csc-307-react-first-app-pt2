import { Character } from './types';

function TableHeader()  {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

interface TableBodyProps {
  characterData: Character[],
  removeCharacter: (i: number) => void,
}

function TableBody({ characterData, removeCharacter }: TableBodyProps) {
  const rows = characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => removeCharacter(index)}>Delete Row</button>
        </td>
      </tr>
    );
  })
  return (
    <tbody>
      {rows}
    </tbody>
  );
}

interface TableProps extends TableBodyProps {

}

export default function Table(props: TableProps) {
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={props.characterData}
        removeCharacter={props.removeCharacter}
      />
    </table>
  );
}
