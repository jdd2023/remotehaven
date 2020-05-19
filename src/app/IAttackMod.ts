import {ATTACKPATH, ATTACKTYPE} from './constants';

interface IAttackMod {
    id: number;
    name: string;
    createURL(): string;
}

export class AttackMod implements IAttackMod{
    id: number;
    name: string;
    
    constructor(id: number, name: string) { 
        this.id = id;
        this.name = name;
    }

    createURL():string {
        return ATTACKPATH + this.name + ATTACKTYPE;
    }

}