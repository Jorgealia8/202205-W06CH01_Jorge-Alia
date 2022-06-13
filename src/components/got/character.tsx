import { useDispatch } from 'react-redux';
import * as ac from '../../reducers/action.creators';
import { CharacterModel } from '../../models/character';

export function Character({ character }: { character: CharacterModel }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(ac.updateCharacterAction(character));
  };

  const handleClick = () => {
    dispatch(ac.deleteCharacterAction(character));
  };

  return (
    <>
      <h3>{character.name}</h3>
      <p>{character.familia}</p>
      <label htmlFor="alive">Alive</label>
      <input
        checked={character.alive}
        type="checkbox"
        name="alive"
        id="alive"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Delete</button>
    </>
  );
}
