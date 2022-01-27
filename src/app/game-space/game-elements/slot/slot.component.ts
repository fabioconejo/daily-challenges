import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'game-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css'],
})
export class SlotComponent implements OnInit, OnChanges {
  @Input() letter: string = '';
  @Input() state: string;
  animation: string = 'idle';

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.state !== 'empty') {
      
      this.animation = 'flip-in';
      
      setTimeout(function () {
        this.animation = 'flip-out';  
      }, 250);
    }
  }
}
