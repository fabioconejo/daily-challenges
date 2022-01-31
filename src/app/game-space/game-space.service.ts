import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD_mT-svtH83QG1luIE1lszWqMNRMljqf0",
  authDomain: "daily-challenges-90763.firebaseapp.com",
  databaseURL: "https://daily-challenges-90763-default-rtdb.firebaseio.com",
  projectId: "daily-challenges-90763",
  storageBucket: "daily-challenges-90763.appspot.com",
  messagingSenderId: "436027376085",
  appId: "1:436027376085:web:0ac1bac91d69943590bd5c",
  measurementId: "G-YY5KE527FD"
};


@Injectable({
  providedIn: 'root',
})
export class GameSpaceService {
  constructor() {}

  isAWord(word: string): boolean {
    return true;
  }
}
