import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  letters;

  constructor() {}

  ngOnInit() {
    this.letters = new Array(5); 
  }
}
