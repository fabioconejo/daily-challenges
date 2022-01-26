import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() gameName: string;
  @Output() tutorial = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
