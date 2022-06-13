export interface iCharacterModel {
  name: string;
  alive: boolean;
  id: number;
}

export class CharacterModel implements iCharacterModel {
  alive: boolean;
  id: number;
  static serie = 'GoT';

  static generateId(): number {
    return Math.ceil(Math.random() * 100_000);
  }

  constructor(
    public name: string,
    public familia: string,
    public edad: number,
    public categoria: 'rey' | 'luchador' | 'asesor' | 'escudero'
  ) {
    this.alive = true;
    this.id = CharacterModel.generateId();
  }
}
