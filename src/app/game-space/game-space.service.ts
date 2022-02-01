import { Injectable } from '@angular/core';


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
