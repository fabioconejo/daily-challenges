import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameSpaceComponent } from './game-space/game-space.component';
import { FiveWordsComponent } from './game-space/five-words/five-words.component';
import { HeaderComponent } from './game-space/game-elements/header/header.component';
import { ToasterComponent } from './game-space/game-elements/toaster/toaster.component';
import { TutorialComponent } from './game-space/game-elements/tutorial/tutorial.component';
import { KeyboardComponent } from './game-space/game-elements/keyboard/keyboard.component';
import { SlotComponent } from './game-space/game-elements/slot/slot.component';
import { WordComponent } from './game-space/game-elements/word/word.component';
import { GameSpaceService } from './game-space/game-space.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    GameSpaceComponent,
    FiveWordsComponent,
    HeaderComponent,
    KeyboardComponent,
    SlotComponent,
    WordComponent,
    TutorialComponent,
    ToasterComponent,
  ],
  providers: [GameSpaceService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
