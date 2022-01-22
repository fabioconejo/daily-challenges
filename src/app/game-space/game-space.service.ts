import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameSpaceService {
  constructor() {}

  isAWord(word: string): boolean {
    console.log(word);
    return true;
  }
}
