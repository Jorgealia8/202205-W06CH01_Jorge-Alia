import { CharacterModel } from '../models/character';

export async function getCharacterList(): Promise<Array<CharacterModel>> {
  return [
    {
      id: CharacterModel.generateId(),
      name: 'Joffrey',
      alive: true,
      familia: 'Baratheon',
      edad: 33,
      categoria: 'rey',
    },
    {
      id: CharacterModel.generateId(),
      name: 'Jaime',
      alive: true,
      familia: 'Lannister',
      edad: 33,
      categoria: 'luchador',
    },
    {
      id: CharacterModel.generateId(),
      name: 'Daenerys',
      alive: true,
      familia: 'Targaryen',
      edad: 33,
      categoria: 'luchador',
    },
    {
      id: CharacterModel.generateId(),
      name: 'Tyrion',
      alive: true,
      familia: 'Lannister',
      edad: 33,
      categoria: 'asesor',
    },
    {
      id: CharacterModel.generateId(),
      name: 'Bronn',
      alive: true,
      familia: 'Aguas Negras',
      edad: 33,
      categoria: 'escudero',
    },
  ];
}
