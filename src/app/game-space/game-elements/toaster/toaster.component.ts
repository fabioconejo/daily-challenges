import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  @Input() text:string
  className:string = "show"

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.className = "";
    }, 2900);
  }

}