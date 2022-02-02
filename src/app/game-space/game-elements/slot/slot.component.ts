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
  @Input() point: string = '';
  animation: string = 'idle';
  localState: string;

  constructor() {}

  ngOnInit() {
    if (this.state !== 'empty' && this.state !== 'lock') {
      this.showResult();
    } else {
      this.localState = this.state;
    }
  }

  showResult() {
    this.localState = 'empty';
    setTimeout(() => {
      this.animation = 'flip-in';
    }, 250 * this.position);

    setTimeout(() => {
      this.localState = this.state;
      this.animation = 'flip-out';
    }, 250 * this.position + 250);
  }
}
