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
    console.log(this.lock);
    if (this.lock) {
      this.state = 'lock';
    }
  }
}
