import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'five-words',
  templateUrl: './five-words.component.html',
  styleUrls: ['./five-words.component.css'],
})
export class FiveWordsComponent implements OnInit {
  currentWordLength: number = 5;
  currentWord: any = new Array(this.currentWordLength);
  index = 0;

  constructor() {}

  ngOnInit() {
    document.documentElement.style.setProperty('--main-bg-color', '#1e1125');
    document.documentElement.style.setProperty('--key-bg', '#180a20');
    document.documentElement.style.setProperty('--slot-brd', '#483a50');

    this.currentWord = [' ', ' ', ' ', ' ', ' '];
  }

  typeLetter(letter: any) {
    if (this.index < this.currentWordLength) {
      this.currentWord[this.index] = letter;
      this.index++;
    }
  }

  removeLetter() {
    if (this.index > 0) {
      this.index--;
      this.currentWord[this.index] = ' ';
    }
  }
}
