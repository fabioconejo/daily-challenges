import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent implements OnInit {
  @Output() letter = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
