import { convertTypeAcquisitionFromJson } from 'typescript';
import { CharacterModel } from '../models/character';

export class HttpStoreCharacter {
  url: string;
  constructor() {
    this.url = 'http://localhost:3521/characters';
  }
  getCharacters(): Promise<Array<CharacterModel>> {
    // GET
    return fetch(this.url).then((resp) => {
      return resp.json();
    });
  }
  getCharacter(id: CharacterModel['id']): Promise<CharacterModel> {
    //GET
    return fetch(this.url + `/${id}`).then((resp) => resp.json());
  }
  setCharacter(character: CharacterModel): Promise<CharacterModel> {
    // POST
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(character),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }
}
