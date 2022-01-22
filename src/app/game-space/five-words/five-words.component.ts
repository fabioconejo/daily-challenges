import { Component, OnInit } from '@angular/core';

import { GameSpaceService } from '../game-space.service';

@Component({
  selector: 'five-words',
  templateUrl: './five-words.component.html',
  styleUrls: ['./five-words.component.css'],
})
export class FiveWordsComponent implements OnInit {
  wordList: any = new Array(5);
  statesList: any = new Array(5);
  wordTemplate: string = ' a a ';
  currentWordLength: number = this.wordTemplate.length;
  currentWord: any = new Array(this.currentWordLength);
  states: any = new Array(this.currentWordLength);
  index = 0;
  indexList = 0;

  constructor(private gss: GameSpaceService) {}

  ngOnInit() {
    this.changeColors();

    for (let i = 0; i < this.wordList.length; i++) {
      this.wordList[i] = this.wordTemplate.split('');
    }

    this.currentWord = this.wordList[0];

    for (let i = 0; i < this.currentWord.length; i++) {
      if (this.currentWord[i] === ' ') {
        this.states[i] = 'empty';
      } else {
        this.states[i] = 'lock';
      }
    }

    this.statesList[0] = Object.assign([], this.states);
    this.statesList[1] = Object.assign([], this.states);
    this.statesList[2] = Object.assign([], this.states);
    this.statesList[3] = Object.assign([], this.states);
    this.statesList[4] = Object.assign([], this.states);
  }

  changeColors() {
    document.documentElement.style.setProperty('--main-bg-color', '#1e1125');
    document.documentElement.style.setProperty('--key-bg', '#180a20');
    document.documentElement.style.setProperty('--slot-brd', '#483a50');
    document.documentElement.style.setProperty('--slot-lock', '#483a50');
  }

  typeLetter(letter: any) {
    if (this.indexList < this.wordList.length) {
      while (
        this.index < this.currentWordLength &&
        this.states[this.index] === 'lock'
      ) {
        this.index++;
      }

      if (this.index < this.currentWordLength) {
        this.currentWord[this.index] = letter;
        this.index++;
      }
    }
  }

  removeLetter() {
    if (this.indexList < this.wordList.length) {
      while (this.index > 0 && this.states[this.index - 1] === 'lock') {
        this.index--;
      }

      if (this.index > 0) {
        this.index--;
        this.currentWord[this.index] = ' ';
      }
    }
  }

  pressEnter() {
    if (this.validateWord()) {
      this.goToNextWord();
    }
  }

  goToNextWord() {
    this.index = 0;
    this.indexList++;
    this.currentWord = this.wordList[this.indexList];
    this.states = this.statesList[this.indexList];
  }

  validateWord(): boolean {
    if (
      this.currentWord.indexOf(' ') === -1 &&
      this.gss.isAWord(this.currentWord.join(''))
    ) {
      for (let i = 0; i < this.currentWord.length; i++) {
        this.states[i] = 'correct';
      }

      this.statesList[this.indexList] = Object.assign([], this.states);
      return true;
    } else {
      return false;
    }
  }
}
