import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css'],
})
export class SlotComponent implements OnInit {
  lock: boolean = false;
  @Input() letter: string = '';

  constructor() {}

  ngOnInit() {}
}
