import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'game-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit, OnChanges {
  @Input() wordLength: string;
  @Input() letters: any;
  @Input() states: any;

  constructor() {}

  ngOnInit() {
    document.documentElement.style.setProperty(
      '--word-length',
      this.wordLength
    );

    
  }

  ngOnChanges(changes: SimpleChanges) {}

  public getStyles() {
    return {
      'grid-template-columns': `repeat(${this.wordLength}, 1fr)`,
    };
  }
}
