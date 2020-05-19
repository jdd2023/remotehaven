import {STATETYPE, STATEPATH} from './constants';

interface IScenarioState {
    id: number;
    name: string;
    active: boolean;
    createURL(): string;
}

export class ScenarioState {
    id: number;
    name: string;
    active: boolean;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this.active = false;
    }

    createURL(): string{
        return STATEPATH + this.name + STATETYPE;
    }
}