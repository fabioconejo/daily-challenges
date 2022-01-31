import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { GameSpaceComponent } from './game-space/game-space.component';
import { FiveWordsComponent } from './game-space/five-words/five-words.component';
import { HeaderComponent } from './game-space/game-elements/header/header.component';
import { ToasterComponent } from './game-space/game-elements/toaster/toaster.component';
import { TutorialComponent } from './game-space/game-elements/tutorial/tutorial.component';
import { KeyboardComponent } from './game-space/game-elements/keyboard/keyboard.component';
import { SlotComponent } from './game-space/game-elements/slot/slot.component';
import { WordComponent } from './game-space/game-elements/word/word.component';

const config = {
  apiKey: "AIzaSyD_mT-svtH83QG1luIE1lszWqMNRMljqf0",
  authDomain: "daily-challenges-90763.firebaseapp.com",
  databaseURL: "https://daily-challenges-90763-default-rtdb.firebaseio.com",
  projectId: "daily-challenges-90763",
  storageBucket: "daily-challenges-90763.appspot.com",
  messagingSenderId: "436027376085",
  appId: "1:436027376085:web:0ac1bac91d69943590bd5c",
  measurementId: "G-YY5KE527FD"
};

@NgModule({
  imports: [BrowserModule, FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
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
    ToasterComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
