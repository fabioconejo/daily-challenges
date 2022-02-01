import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore/lite';

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
