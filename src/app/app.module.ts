import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameSpaceComponent } from './game-space/game-space.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GameSpaceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
