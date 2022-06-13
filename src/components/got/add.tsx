import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CharacterModel } from '../../models/character';
import * as ac from '../../reducers/action.creators';

export function Add() {
  const tipe = ['Luchador', 'Asesor', 'Rey', 'Escudero'];
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    alive: true,
    familia: '',
    edad: 33,
  });

  function handleSubmit(ev: SyntheticEvent) {
    ev.preventDefault();
    console.log('Guardando', formData);
    dispatch(
      ac.addCharacterAction(
        new CharacterModel(
          formData.name,
          formData.familia,
          formData.edad,
          formData.categoria
        )
      )
    );
  }

  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    const value = element.type === 'checkbox' ? element.checked : element.value;
    setFormData({ ...formData, [element.name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Introduce el nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <select
          name="responsible"
          id=""
          value={formData.categoria}
          onChange={handleChange}
          required
        >
          <option></option>
          {tipe.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="Alive">Alive</label>
        <input
          type="checkbox"
          name="alive"
          id="alive"
          checked={formData.alive}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
}
