import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import { Character } from './character';

export function List() {
  const characters = useSelector((state: iState) => state.characters);

  return (
    <>
      <p>Lista:</p>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
    </>
  );
}
