import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'game-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css'],
})
export class SlotComponent implements OnInit, OnChanges {
  @Input() letter: string = '';
  @Input() state: string;
  @Input() position: number;
  animation: string = 'idle';
  localState: string;

  constructor() {}

  ngOnInit() {
    this.localState = this.state;
  }

  ngOnChanges() {
    if (this.state === 'correct') {
      this.animation = 'flip-in';
      setTimeout(() => {
        this.localState = this.state;
        this.animation = 'flip-out';
      }, 250 * (this.position + 1));
    }
  }
}
