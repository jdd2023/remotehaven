import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ScenarioState } from './IScenarioState';
import { SCENARIOSTATES } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class ScenarioStatusService {

  getScenarioStates(): Observable<ScenarioState[]> {
    return of(SCENARIOSTATES);
  }

  constructor() { }
}
