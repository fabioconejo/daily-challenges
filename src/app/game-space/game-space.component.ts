import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore/lite';

@Component({
  selector: 'game-space',
  templateUrl: './game-space.component.html',
  styleUrls: ['./game-space.component.css']
})
export class GameSpaceComponent implements OnInit {

  constructor(firestore: Firestore) { }

  ngOnInit() {
  }

}