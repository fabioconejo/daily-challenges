import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Output() textChange = new EventEmitter();
  className: string = '';

  constructor() {}

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.toast();
  }

  toast() {
    if (this.text !== '') {
      this.className = 'show';
      setTimeout(() => {
        this.className = '';
        this.text = '';
        this.textChange.emit(this.text);
      }, 2900);
    }
  }
}
