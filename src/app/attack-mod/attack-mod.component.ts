import { Component, OnInit, Input } from '@angular/core';
import { ATTACKBACK } from '../constants';
import { AttackMod } from '../IAttackMod';
import { AttackModService } from '../attack-mod.service';
import { MyScenario } from '../IScenerio';

@Component({
  selector: 'app-attack-mod',
  templateUrl: './attack-mod.component.html',
  styleUrls: ['./attack-mod.component.css']
})
export class AttackModComponent implements OnInit {

  @Input() myScenario: MyScenario;

  attackMods: AttackMod[];
  attackBack: string = ATTACKBACK;

  constructor(private attackModDeck: AttackModService) { }

  ngOnInit(): void {
    this.getBaseDeck();
  }

  getBaseDeck(): void {
    this.attackModDeck.getBaseDeck()
      .subscribe(attackMods => this.myScenario.attackDeck = attackMods);
      console.log(this.myScenario);
  }

  drawCard(): void {
    console.log('Click');
    this.myScenario.drawDeck();
    console.log(this.myScenario.activeAttackMod);
  }

  shuffle(): void {
    this.myScenario.shuffleDeck();
  }
}
