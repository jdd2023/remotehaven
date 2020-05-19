import {ABILITYTYPE, ABILITYPATH} from './constants';
import { MyCharacter } from './IMyCharacter';
import { CharacterPerk } from './characterPerk';
import { CharacterAbility } from './ICharacterAbility';
import { AttackMod } from './IAttackMod';
import { Item } from './item';

interface IScenario {
    id: number;
    experience?: number;
    gold?: number;
    health?: number;
    hand?: Array<CharacterAbility>;
    played?: Array<CharacterAbility>;
    discarded?: Array<CharacterAbility>;
    active?: Array<CharacterAbility>;
    lost?: Array<CharacterAbility>;
    items?: Array<Item>;
    attackDeck?: Array<AttackMod>;
    attackDiscard?: Array<AttackMod>;
    activeAttackMod?: string;
    myCharacter?: MyCharacter;
    quickRest(): void;
    moveAll(): void;
    shuffleDeck(): void;
    drawDeck(): void;
    discardCards(): void;
    createCardPath(string): string;
}

export class MyScenario implements IScenario {

    id: number;
    experience: number;
    gold: number;
    health: number;
    hand: Array<CharacterAbility>;
    played: Array<CharacterAbility>;
    discarded: Array<CharacterAbility>;
    active: Array<CharacterAbility>;
    lost: Array<CharacterAbility>;
    items: Array<Item>;
    attackDeck: Array<AttackMod>;
    attackDiscard: Array<AttackMod>;
    myCharacter: MyCharacter;
    activeAttackMod: string;

    constructor(id: number, character: MyCharacter ) { 
        this.id = id;
        this.myCharacter = character;
        this.experience = 0;
        this.gold = 0;
        this.health = this.myCharacter.maxhealth;
        this.hand = this.myCharacter.hand;
        this.played = [];
        this.discarded = [];
        this.active = [];
        this.lost = [];
        this.items = this.myCharacter.items;
        this.attackDeck = [];
        this.attackDiscard = [];
        this.activeAttackMod = '';
    }

    moveAll(): void {
        this.hand = this.hand.concat(this.discarded.splice(0,this.discarded.length));
    }

    discardCards(): void{
        this.discarded = this.discarded.concat(this.played.splice(0,this.played.length));
    }

    quickRest():void {
        let index: number = Math.floor(Math.random() * this.discarded.length);
        //Randomly remove one card from discard pile and add to lost
        this.lost.push(this.discarded.splice(index,1)[0]);
        //Take the rest of the discard and move them to the hand
        this.moveAll();
    }

    shuffleDeck():void {
        this.attackDeck = this.attackDeck.concat(this.attackDiscard);
        this.attackDiscard = [];
        this.activeAttackMod = '';
    }

    drawDeck(): void{
        let index: number = Math.floor(Math.random() * this.attackDeck.length);
        //Randomly remove one card from the attack deck and add it to the end of the discard deck
        let drawnAttackMod: AttackMod = this.attackDeck.splice(index,1)[0];
        this.activeAttackMod = drawnAttackMod.createURL();
        this.attackDiscard.push(drawnAttackMod);
    }

    createCardPath(name: string): string{
        return ABILITYPATH + this.myCharacter.characterClass.name + '/' + name + ABILITYTYPE;
      }
}