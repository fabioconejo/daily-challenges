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
  pointsList: any = new Array(5);
  wordTemplate: string = '    ';
  currentWordLength: number = this.wordTemplate.length;
  currentWord: any = new Array(this.currentWordLength);
  states: any = new Array(this.currentWordLength);
  points: any = new Array(this.currentWordLength);
  frequency: any = new Array();
  totalPoints:number = 0;
  index: number = 0;
  indexList: number = 0;
  toasterText: string = '';

  constructor(private gss: GameSpaceService) {
    console.log(this.currentWordLength);
  }

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

    for (let i = 0; i < this.pointsList.length; i++) {
      this.pointsList[i] = Object.assign([], this.points);
    }
    this.points = this.pointsList[0];
  }

  changeColors() {
    document.documentElement.style.setProperty('--main-bg-color', '#1e1125');
    document.documentElement.style.setProperty(
      '--overlay-bg-color',
      'rgba(30, 17, 37, 0.85)'
    );
    document.documentElement.style.setProperty('--key-bg', '#180a20');
    document.documentElement.style.setProperty('--slot-brd', '#483a50');
    document.documentElement.style.setProperty('--slot-lock', '#483a50');
  }

  loadOverlay() {
    document.getElementsByTagName('tutorial')[0].setAttribute('open', '');
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

  async pressEnter() {
    if (await this.validateWord()) {
      this.calculatePoints();
      this.goToNextWord();
    }
  }

  calculatePoints() {
    for (let i = 0; i < this.currentWord.length; i++) {
      let letter = this.currentWord[i];

      if (this.frequency[letter]) {
        this.frequency[letter] += 1;
        this.points[i] = Math.max(3 - this.frequency[letter], 0); 
      } else {
        this.frequency[letter] = 1;
        this.points[i] = 2;
      }

      this.totalPoints += this.points[i];
    }

    console.log(this.totalPoints);
  }

  goToNextWord() {
    this.index = 0;
    this.indexList++;
    this.currentWord = this.wordList[this.indexList];
    this.states = this.statesList[this.indexList];
    this.points = this.pointsList[this.indexList];
  }

  async validateWord(): Promise<boolean> {
    if (this.currentWord.indexOf(' ') !== -1) {
      this.toasterText = 'Not enough letters';
      return false;
    }

    for (let word of this.wordList) {
      if (word.join('') === this.currentWord.join('')) {
      }
    }

    if (!(await this.gss.isAWord(this.currentWord.join('')))) {
      this.toasterText = 'Not in word list';
      return false;
    }

    for (let i = 0; i < this.currentWord.length; i++) {
      this.states[i] = 'correct';
    }

    this.statesList[this.indexList] = Object.assign([], this.states);
    return true;
  }
}
