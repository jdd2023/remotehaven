import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCharacterComponent } from './my-character/my-character.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttackModComponent } from './attack-mod/attack-mod.component';
import { ScenarioStateComponent } from './scenario-state/scenario-state.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCharacterComponent,
    ScenarioComponent,
    AttackModComponent,
    ScenarioStateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
