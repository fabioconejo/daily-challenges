import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class GameSpaceService {
  constructor(firestore: AngularFirestore) {}

  isAWord(word: string): boolean {
    return true;
  }
}
