import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'five-words',
  templateUrl: './five-words.component.html',
  styleUrls: ['./five-words.component.css'],
})
export class FiveWordsComponent implements OnInit {
  wordList: any = new Array(5);
  wordTemplate: string = '  eck';
  currentWordLength: number = 5;
  currentWord: any = new Array(this.currentWordLength);
  lock: any = new Array(this.currentWordLength);
  index = 0;

  constructor() {}

  ngOnInit() {
    document.documentElement.style.setProperty('--main-bg-color', '#1e1125');
    document.documentElement.style.setProperty('--key-bg', '#180a20');
    document.documentElement.style.setProperty('--slot-brd', '#483a50');
    document.documentElement.style.setProperty('--slot-lock', '#483a50');

    this.currentWord = this.wordTemplate.split('');

    for (let i = 0; i < this.currentWord.length; i++) {
      this.lock[i] = this.currentWord[i] !== ' ';
    }
  }

  typeLetter(letter: any) {
    if (this.index < this.currentWordLength) {
      this.currentWord[this.index] = letter;
      this.index++;
    }

    while (this.index < this.currentWordLength && this.lock[this.index]) {
      this.index++;
    }
  }

  removeLetter() {
    while (this.index > 0 && this.lock[this.index - 1]) {
      this.index--;
    }

    if (this.index > 0) {
      this.index--;
      this.currentWord[this.index] = ' ';
    }
  }
}
