import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css'],
})
export class SlotComponent implements OnInit {
  @Input() lock: boolean;
  @Input() letter: string = '';

  constructor() {}

  ngOnInit() {}
}
