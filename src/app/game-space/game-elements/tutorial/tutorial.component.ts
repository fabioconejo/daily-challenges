import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
})
export class TutorialComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  closeOverlay() {
    document.getElementsByClassName('overlay')[0].classList.add('closing');
    setTimeout(function(){
      document.getElementsByTagName('tutorial')[0].removeAttribute('open');
      document.getElementsByClassName('overlay')[0].classList.remove('closing');
  }, 150);
    
  }
}
