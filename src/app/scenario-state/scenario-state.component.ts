import { Component, OnInit } from '@angular/core';
import { ScenarioState } from '../IScenarioState';
import { ScenarioStatusService } from '../scenario-status.service';

@Component({
  selector: 'app-scenario-state',
  templateUrl: './scenario-state.component.html',
  styleUrls: ['./scenario-state.component.css']
})
export class ScenarioStateComponent implements OnInit {

  scenarioStates: ScenarioState[];
  activeScenarioStates: ScenarioState[] = [];

  constructor(private scenarioStatesService: ScenarioStatusService) { }

  ngOnInit(): void {
    this.getScenarioStates();
  }

  getScenarioStates(): void {
    this.scenarioStatesService.getScenarioStates()
      .subscribe(scenarioStates => this.scenarioStates = scenarioStates);
  }


}
