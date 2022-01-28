import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Output() textEmitter: EventEmitter<string> = new EventEmitter<string>();
  className: string = '';

  constructor() {}

  ngOnInit() {
    this.textEmitter.emit(this.text);
  }

  ngOnChanges() {
    if (this.text !== '') {
      this.className = 'show';
      setTimeout(() => {
        this.className = '';
        this.text = '';
        this.textEmitter.emit(this.text);
      }, 2900);
    }
  }
}
