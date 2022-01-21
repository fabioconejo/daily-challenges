import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css'],
})
export class SlotComponent implements OnInit {
  @Input() lock: any;
  @Input() letter: string = '';
  state = 'empty';

  constructor() {}

  ngOnInit() {
    if (this.lock) {
      this.state = 'lock';
    }
  }
}
