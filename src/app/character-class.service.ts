import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CharacterClassGroup } from './characterClassGroup';
import { CHARACTERCLASSGROUPS } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class CharacterClassService {
  getCharacterClasses(): Observable<CharacterClassGroup[]> {
    return of(CHARACTERCLASSGROUPS);
  }

  constructor() { }
}
