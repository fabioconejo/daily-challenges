import { Injectable } from '@angular/core';

import { FirebaseApp, getApp } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class GameSpaceService {
  constructor() {
    //const app = getApp();
  }
  
  isAWord(word: string): boolean {
    return true;
  }
}
