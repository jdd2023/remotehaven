import {ABILITYTYPE, ABILITYPATH} from './constants';
import { CharacterClass } from './characterClass';
import { CharacterPerk } from './characterPerk';
import { CharacterAbility } from './ICharacterAbility';
import { Item } from './item';

interface IMyCharacter {
    id: number;
    name: string;
    level: number;
    experience?: number;
    gold?: number;
    maxhealth?: number;
    characterClass?: CharacterClass;
    perks?: Array<CharacterPerk>;
    abilities?: Array<CharacterAbility>;
    hand?: Array<CharacterAbility>;
    items?: Array<Item>;
    calculateMaxHealth(): void;
    createCardPath(string): string;
    handSizeDisplay(): string;
    doesHandHaveRoom(): boolean;
}

export class MyCharacter implements IMyCharacter {
    id: number;
    name: string;
    level: number;
    experience: number;
    gold: number;
    maxhealth: number;
    characterClass?: CharacterClass;
    perks: Array<CharacterPerk>;
    abilities: Array<CharacterAbility>;
    hand: Array<CharacterAbility>;
    items: Array<Item>;

    constructor(id: number, name: string) { 
      this.id = id;
      this.name = name;
      this.level = 1;
      this.characterClass = null;
      this.experience = 0;
      this.gold = 0;
      this.maxhealth = 0;
      this.hand = [];
      this.perks = [];
      this.abilities = [];
      this.items = [];
    }

    calculateMaxHealth(){
      this.maxhealth = parseInt(this.characterClass.health.split(',',this.level)[this.level - 1]);
    }

    createCardPath(name: string): string{
      return ABILITYPATH + this.characterClass.name + '/' + name + ABILITYTYPE;
    }

    handSizeDisplay(): string{
      return this.hand.length.toString() + ' / ' + this.characterClass.handsize.toString();
    }

    doesHandHaveRoom(): boolean{
      return this.hand.length < this.characterClass.handsize;
    }
}