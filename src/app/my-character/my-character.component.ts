import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { CharacterAbility } from '../ICharacterAbility';
import { MyCharacter } from '../IMyCharacter';
import { CharacterClass } from '../characterClass';
import { CharacterClassGroup } from '../characterClassGroup';
import { CharacterClassService } from '../character-class.service';

@Component({
  selector: 'app-my-character',
  templateUrl: './my-character.component.html',
  styleUrls: ['./my-character.component.css']
})
export class MyCharacterComponent implements OnInit {

  startingHand: CharacterAbility[] = [];
  
  selectedCharacterClass: CharacterClass;
  myCharacter = new MyCharacter(1,'Ceda');

  characterClassGroups: CharacterClassGroup[];
  
  constructor(private characterClassService: CharacterClassService) { }

  ngOnInit(): void {
    this.getCharacterClasses();
  }

  getCharacterClasses(): void {
    this.characterClassService.getCharacterClasses()
      .subscribe(characterClasses => this.characterClassGroups = characterClasses);
  }

  onSelect(value): void {
    this.myCharacter.calculateMaxHealth();
  }

  onChange(value): void {
    this.myCharacter.calculateMaxHealth();
    console.log('Max Health: ' + this.myCharacter.maxhealth);
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
