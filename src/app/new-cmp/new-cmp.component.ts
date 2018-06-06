import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
})
export class NewCmpComponent implements OnInit {
  newcomponent = "Entered in new component created";
  // declared array of months.
   months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  isavailable = false;   //variable is set to true
  constructor() { }

  ngOnInit() {
  }
  
  // Click Event Called
  myClickFunction(event) { 
      alert("Button is clicked");
      console.log(event);
   }
   
    changemonths(event) {
      console.log("Changed month from the Dropdown");
      console.log(event);
   }

}
