import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

import { environment } from '../../environments/environment';

if (firebase.apps.length === 0) {
  firebase.initializeApp(environment.firebase);
}


@Injectable({
  providedIn: 'root',
})
export class GameSpaceService {
  constructor() {}

  isAWord(word: string): boolean {
    return true;
  }
}
