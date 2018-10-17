import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-e',
  templateUrl: './parent-e.component.html',
})
export class ParentEComponent implements OnInit {

  constructor() { }

  message:string;

ngOnInit(){
    
}
  receiveMessage($event) {
    this.message = $event
    console.log("Sasas");
    console.log($event);
  }

}
