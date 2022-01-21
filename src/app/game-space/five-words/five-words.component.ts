import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'five-words',
  templateUrl: './five-words.component.html',
  styleUrls: ['./five-words.component.css'],
})
export class FiveWordsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.documentElement.style.setProperty('--main-bg-color', '#1e1125');
    document.documentElement.style.setProperty('--key-bg', '#180a20');
    document.documentElement.style.setProperty('--slot-brd', '#483a50');
  }

  typeLetter(letter: any) {
    console.log(letter);
  }
}
