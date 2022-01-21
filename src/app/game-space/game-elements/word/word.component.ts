import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  @Input() wordLength: string;
  letters: any;

  constructor() {}

  ngOnInit() {
    document.documentElement.style.setProperty(
      '--word-length',
      this.wordLength
    );
    this.letters = new Array(+this.wordLength);
  }
}
