import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';

import { environment } from '../../environments/environment';

const firebaseApp = initializeApp(environment.firebase)


@Injectable({
  providedIn: 'root',
})
export class GameSpaceService {
  constructor() {}

  isAWord(word: string): boolean {
    return true;
  }
}
