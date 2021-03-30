import { Character } from './types';

function TableHeader()  {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

interface TableBodyProps {
  characterData: Character[],
}

function TableBody({ characterData }: TableBodyProps) {
  const rows = characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
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
      <TableBody characterData={props.characterData} />
    </table>
  );
}
