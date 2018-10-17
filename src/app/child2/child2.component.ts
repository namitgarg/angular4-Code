import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  setFirstName(InputFirstName){
      console.log(InputFirstName);
      console.log("value is "+InputFirstName.value);
  }

}
