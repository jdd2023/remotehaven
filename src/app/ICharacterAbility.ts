interface ICharacterAbility {
    id: number;
    name: string;
    level: number;
    image: string;
}

export class CharacterAbility {
    id: number;
    name: string;
    level: number;
    image: string;

    constructor(id: number, name: string, level: number, image: string ) {
      this.id = id;
      this.name = name;
      this.level = level;
      this.image = image;
    }
}