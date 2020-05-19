import { CharacterClass } from './characterClass';

export interface CharacterClassGroup {
    name: string;
    disabled: boolean;
    characterClasses: Array<CharacterClass>;
  }