import { Component, OnInit } from '@angular/core';
import { MyScenario } from '../IScenerio';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CharacterAbility } from '../ICharacterAbility';



@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {

  myScenario: MyScenario;

  constructor() { }

  ngOnInit(): void {
    this.myScenario = new MyScenario(1, history.state.data);
    console.log(history.state.data);
  }

  quickRest() {
    this.myScenario.quickRest();
  }

  discardCards(){
    this.myScenario.discardCards();
  }

  longRest(){
    this.myScenario.moveAll();
  }

  drop(event: CdkDragDrop<CharacterAbility[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
