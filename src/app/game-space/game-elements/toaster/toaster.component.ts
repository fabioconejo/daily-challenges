import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit, OnChanges {
  @Input() text: string;
  className: string = '';

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.text !== '') {
      this.className = 'show';
      setTimeout(() => {
        this.className = '';
        this.text = '';
      }, 2900);
    }
  }
}
