import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenarioComponent} from './scenario/scenario.component';
import { MyCharacterComponent } from './my-character/my-character.component';


const routes: Routes = [
  { path: 'scenario', component: ScenarioComponent },
  { path: 'create', component: MyCharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
