import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-e',
  templateUrl: './parent-e.component.html',
})
export class ParentEComponent implements OnInit {

  constructor() { }

  message:string;

  receiveMessage($event) {
    this.message = $event
    console.log("Sasas");
  }

}
