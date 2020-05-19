import { CharacterClass } from './characterClass';

export interface CharacterPerk {
    id: number;
    name: string;
    typeToRemove: string;
    nameToAdd: string;
    characterClass: CharacterClass;
  }