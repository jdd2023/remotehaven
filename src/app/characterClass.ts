import { CharacterAbility } from './ICharacterAbility';
import { CharacterPerk } from './characterPerk';

export interface CharacterClass {
    id: number;
    name: string;
    displayName?: string;
    health: string;
    handsize?: number;
    type: string;
    perks?: Array<CharacterPerk>;
    abilities?: Array<CharacterAbility>;
  }