import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() gameName: string;

  constructor() {}

  ngOnInit() {}

  loadOverlay() {
    document.getElementById('overlay').style.display = 'block';
  }
}
