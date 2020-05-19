import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AttackMod } from './IAttackMod';
import { BASEATTACKMODDECK } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class AttackModService {

  getBaseDeck(): Observable<AttackMod[]> {
    return of(BASEATTACKMODDECK);
  }


  constructor() { }
}
