import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameSpaceComponent } from './game-space/game-space.component';
import { FiveWordsComponent } from './game-space/five-words/five-words.component';
import { HeaderComponent } from './game-space/game-elements/header/header.component';
import { KeyboardComponent } from './game-space/game-elements/keyboard/keyboard.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    GameSpaceComponent,
    FiveWordsComponent,
    HeaderComponent,
    KeyboardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
