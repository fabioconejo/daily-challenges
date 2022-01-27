import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'game-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css'],
})
export class SlotComponent implements OnInit {
  @Input() letter: string = '';
  @Input() state: string;
  @Input() position: number;
  animation: string = 'idle';
  localState: string;

  constructor() {}

  ngOnInit() {
    this.localState = 'empty';
    if (this.state === 'correct') {
      this.showResult();
    } else {
      this.localState = this.state;
    }
  }

  showResult() {
    setTimeout(() => {
      this.localState = 'empty';
      this.animation = 'flip-in';
    }, 250 * this.position);

    setTimeout(() => {
      this.localState = 'correct';
      this.animation = 'flip-out';
    }, 250 * this.position + 250);
  }
}
